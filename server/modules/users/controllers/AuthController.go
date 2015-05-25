package controllers

import (
	"crypto/sha512"
	"encoding/hex"
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"github.com/astaxie/beego/validation"
	"keep-in-touch/server/components"
	userModel "keep-in-touch/server/modules/users/models"
	"log"
)

type AuthController struct {
	beego.Controller
}

func (this *AuthController) SignIn() {
	// Initialize a new orm
	o := orm.NewOrm()
	o.Using("default")
	// Initialzie user
	var user userModel.User
	// Get data from request body
	data := this.Ctx.Input.RequestBody

	//Convert json to struct
	if err := json.Unmarshal(data, &user); err != nil {
		this.Data["json"] = components.ResponseData{Code: 500, Errors: err.Error()}
		this.ServeJson()
		beego.Error(err)
		return
	}

	//Apply validation rules to the received data
	valid := validation.Validation{}
	valid.Email(user.Email, "email")
	valid.MinSize(user.Password, 6, "password")

	// @TODO: it should be moved to the independent service
	if valid.HasErrors() {
		errorResponse := make(map[string]interface{})
		validationErrors := make(map[string]string)
		for _, err := range valid.Errors {
			validationErrors[err.Key] = err.Message
			log.Println(err.Key, err.Message)
		}
		errorResponse["validation"] = validationErrors

		this.Data["json"] = components.ResponseData{Code: 200, Success: false, Errors: errorResponse}
		this.ServeJson()
		return
	}
	// @TODO: create a service to work with crypto
	h := sha512.New()
	h.Write([]byte(user.Password))
	hashedPassword := hex.EncodeToString(h.Sum(nil))
	user.Password = hashedPassword
	log.Print(user)
	err := o.QueryTable("user").Filter("email", user.Email).Filter("password", hashedPassword).One(&user)

	//@TODO: error response shpuld be moved to independen service
	if err == orm.ErrMultiRows {
		this.Data["json"] = components.ResponseData{Code: 500, Success: false, Errors: err.Error()}
		this.ServeJson()
		beego.Error(err.Error())
		return
	}
	// If user exists, show error message
	if err == orm.ErrNoRows {
		errorResponse := make(map[string]interface{})
		errorResponse["validation"] = map[string]string{"email": "The current email doesn't exist"}
		this.Data["json"] = components.ResponseData{Code: 200, Success: false, Errors: errorResponse}
		this.ServeJson()
		return
	}

	// Set response data
	this.Data["json"] = components.ResponseData{Code: 200, Success: true, Data: user}
	this.ServeJson()

}
