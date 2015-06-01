package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"keep-in-touch/server/modules/users/controllers"
)

func init() {
	beego.InsertFilter("*", beego.BeforeRouter, func(ctx *context.Context) {
		ctx.Output.Header("Access-Control-Allow-Origin", "http://localhost:9000")
		ctx.Output.Header("Access-Control-Allow-Credentials", "true")
	})
	beego.Router("/users", &controllers.UsersController{})
	beego.Router("/sign-in", &controllers.AuthController{}, "post:SignIn")
	beego.Router("/sign-out", &controllers.AuthController{}, "get:SignOut")
	beego.Router("/check-auth", &controllers.AuthController{}, "get:CheckAuth")
}
