package controllers

import (
	"crypto/sha512"
	"encoding/hex"
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"github.com/astaxie/beego/validation"
	userModel "keep-in-touch/server/modules/users/models"
	services "keep-in-touch/server/services"
	"log"
	"strings"
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
	//Initialzie error service
	var errorService services.ErrorService

	//Convert json to struct
	if err := json.Unmarshal(data, &user); err != nil {
		this.Data["json"] = errorService.ServerError(err)
		this.ServeJson()
		beego.Error(err)
		return
	}

	//Apply validation rules to the received data
	valid := validation.Validation{}
	valid.Email(strings.TrimSpace(user.Email), "email")
	valid.Required(strings.TrimSpace(user.Password), "password")

	if valid.HasErrors() {
		this.Data["json"] = errorService.ValidationErrors(valid)
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

	if err == orm.ErrMultiRows {

		this.Data["json"] = errorService.ServerError(err)
		this.ServeJson()
		return
	}

	// If user exists, show error message
	if err == orm.ErrNoRows {
		this.Data["json"] = services.ResponseData{Code: 200, Success: false, Errors: "Email or password is invalid"}
		this.ServeJson()
		return
	}

	// Set response data
	this.Data["json"] = services.ResponseData{Code: 200, Success: true, Data: user}
	this.ServeJson()

}
