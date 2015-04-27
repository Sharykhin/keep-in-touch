package controllers

import (
	"github.com/astaxie/beego"
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
