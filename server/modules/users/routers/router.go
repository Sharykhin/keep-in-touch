package routers

import (
	"github.com/astaxie/beego"
	"keep-in-touch/server/modules/users/controllers"
	"log"
)

type RouteMap struct {
	Routes map[string]interface{}
}

func init() {

	beego.Router("/users", &controllers.UsersController{})

	/*ns := beego.NewNamespace("/api",
		beego.NSNamespace("/v1",
			beego.NSRouter("/users", &controllers.UsersController{}),
			beego.NSRouter("/sign-in", &controllers.AuthController{}, "post:SignIn"),
			beego.NSRouter("/sign-out", &controllers.AuthController{}, "get:SignOut"),
			beego.NSRouter("/check-auth", &controllers.AuthController{}, "get:CheckAuth"),
		),
	)
	beego.AddNamespace(ns)*/
	log.Println("I am second")

}
