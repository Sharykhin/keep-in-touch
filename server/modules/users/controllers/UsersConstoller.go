package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	userModel "keep-in-touch/server/modules/users/models"
)

type UsersController struct {
	beego.Controller
}

func (this *UsersController) Get() {
	this.Data["json"] = struct {
		Code int
	}{Code: 200}
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
		beego.Error(err)
	}
	// Make insert request
	id, err := o.Insert(user)
	if err != nil {
		beego.Error(err)
	}
	// Set response data
	this.Data["json"] = struct {
		Code int
		Id   int
	}{Code: 200, Id: int(id)}

	this.ServeJson()

}
