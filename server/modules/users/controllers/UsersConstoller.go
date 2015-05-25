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

type UsersController struct {
	beego.Controller
}

func (this *UsersController) Get() {
	this.Data["json"] = components.ResponseData{Code: 200}
	this.ServeJson()
}

func (this *UsersController) Post() {
	// Initialize ORM
	o := orm.NewOrm()
	o.Using("default")
	// Get JSON data from body
	data := this.Ctx.Input.RequestBody
	// Initialize new model
	user := new(userModel.User)
	// Initialize validation
	valid := validation.Validation{}
	// Convert json to struct
	if err := json.Unmarshal(data, &user); err != nil {
		this.Data["json"] = components.ResponseData{Code: 500, Errors: err.Error()}
		this.ServeJson()
		beego.Error(err)
		return
	}

	// Initialize model which will be user for checking user who has the same email
	var oldUser userModel.User
	// Make a query
	err := o.QueryTable("user").Filter("email", user.Email).One(&oldUser)

	//@TODO: error response shpuld be moved to independen service
	if err == orm.ErrMultiRows {
		this.Data["json"] = components.ResponseData{Code: 500, Success: false, Errors: err.Error()}
		this.ServeJson()
		beego.Error(err.Error())
		return
	}
	// If user exists, show error message
	if err != orm.ErrNoRows {
		errorResponse := make(map[string]interface{})
		errorResponse["validation"] = map[string]string{"email": "The current email already exists"}
		this.Data["json"] = components.ResponseData{Code: 200, Success: false, Errors: errorResponse}
		this.ServeJson()
		return
	}

	// check if user is valid (rule is writtern in model)
	isValid, err := valid.Valid(user)
	if err != nil {
		beego.Error(err)
	}

	// @TODO: it should be moved to the independent service
	if !isValid {
		//create map with validation errors
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
	// Encrypt password by using sha512
	h := sha512.New()
	h.Write([]byte(user.Password))
	hashedPassword := hex.EncodeToString(h.Sum(nil))
	user.Password = hashedPassword
	// Make insert request
	id, err := o.Insert(user)
	if err != nil {
		beego.Error(err)
	}

	// Set response data
	this.Data["json"] = components.ResponseData{Code: 200, Success: true, Data: id}

	this.ServeJson()

}
