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
	services "keep-in-touch/server/services"
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
	//Initialzie error service
	var errorService services.ErrorService

	// Convert json to struct
	if err := json.Unmarshal(data, &user); err != nil {
		this.Data["json"] = errorService.ServerError(err)
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
		this.Data["json"] = errorService.ServerError(err)
		this.ServeJson()
		return
	}
	// If user exists, show error message
	if err != orm.ErrNoRows {
		this.Data["json"] = errorService.ValidationCustomErrors(map[string]string{"email": "The current email already exists"})
		this.ServeJson()
		return
	}

	// check if user is valid (rule is writtern in model)
	isValid, err := valid.Valid(user)
	if err != nil {
		this.Data["json"] = errorService.ServerError(err)
		this.ServeJson()
		return
	}

	// @TODO: it should be moved to the independent service
	if !isValid {

		this.Data["json"] = errorService.ValidationErrors(valid)
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
