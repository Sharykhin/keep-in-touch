package controllers

import (
	"github.com/astaxie/beego"
)

type EchoController struct {
	beego.Controller
}

type Echo struct {
	Status   int
	Response string
}

func (this *EchoController) Get() {

	res := Echo{200, "Success"}
	this.Data["json"] = res
	this.ServeJson()
}

func (this *EchoController) Post() {

	this.Data["json"] = struct {
		RequestType string
	}{
		RequestType: this.Ctx.Request.Method,
	}
	this.ServeJson()
}
