package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
	//"github.com/astaxie/beego/orm"
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
	beego.Debug("HELLO")
	req := this.Ctx.Request

	p := make([]byte, req.ContentLength)
	user := new(userModel.User)
	_, err := this.Ctx.Request.Body.Read(p)
	if err == nil {
		json.Unmarshal(p, &user)
	}
	//o := orm.NewOrm()

	//json.Unmarshal(this.Ctx.Request.Body, &user)
	//beego.Debug(this.Ctx.Input.Params)
	this.Data["json"] = user
	this.ServeJson()

}
