package routers

import (
	"github.com/astaxie/beego"
	"keep-in-touch/server/modules/users/controllers"
	"log"
)

var NS *beego.Namespace

func init() {

	//beego.Router("/users", &controllers.UsersController{})

	ns := beego.NewNamespace("/users",
		beego.NSRouter("/", &controllers.UsersController{}),
	)

	beego.NSRouter("/", &controllers.UsersController{})

	NS = ns

	/*ns := beego.NewNamespace("/api",
		beego.NSNamespace("/v1",
			beego.NSRouter("/users", &controllers.UsersController{}),
			beego.NSRouter("/sign-in", &controllers.AuthController{}, "post:SignIn"),
			beego.NSRouter("/sign-out", &controllers.AuthController{}, "get:SignOut"),
			beego.NSRouter("/check-auth", &controllers.AuthController{}, "get:CheckAuth"),
		),
	)
	beego.AddNamespace(ns)*/

	log.Printf("%T", beego.NSRouter("/users", &controllers.UsersController{}))
	log.Println("I am second")

}
