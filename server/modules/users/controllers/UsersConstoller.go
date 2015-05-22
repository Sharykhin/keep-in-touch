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
	o := orm.NewOrm()
	o.Using("default")
	// Get JSON data
	data := this.Ctx.Input.RequestBody
	// Initialize new model
	user := new(userModel.User)
	valid := validation.Validation{}
	// Convert json
	if err := json.Unmarshal(data, &user); err != nil {
		this.Data["json"] = components.ResponseData{Code: 500, Errors: err.Error()}

		this.ServeJson()
		beego.Error(err)
	}
	// check if user is valid (rule is writtern in model)
	isValid, err := valid.Valid(user)
	if err != nil {
		beego.Error(err)
	}

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
