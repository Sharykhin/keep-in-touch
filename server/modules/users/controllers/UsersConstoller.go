package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"keep-in-touch/server/components"
	userModel "keep-in-touch/server/modules/users/models"
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
	// Convert json
	if err := json.Unmarshal(data, &user); err != nil {
		errorData := components.ErrorData{Type: "json", Message: err.Error()}
		this.Data["json"] = components.ResponseData{Code: 500, Errors: []components.ErrorData{errorData}}

		this.ServeJson()
		beego.Error(err)
	}
	// Make insert request
	id, err := o.Insert(user)
	if err != nil {
		beego.Error(err)
	}

	// Set response data
	this.Data["json"] = components.ResponseData{Code: 200, Data: id}

	this.ServeJson()

}
