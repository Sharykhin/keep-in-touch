package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"keep-in-touch/server/modules/users/controllers"
)

func init() {
	beego.InsertFilter("*", beego.BeforeRouter, func(ctx *context.Context) {
		ctx.Output.Header("Access-Control-Allow-Origin", "*")
	})
	beego.Router("/users", &controllers.UsersController{})
	beego.Router("/sign-in", &controllers.AuthController{}, "post:SignIn")
}
