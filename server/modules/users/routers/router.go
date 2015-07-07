package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"keep-in-touch/server/modules/users/controllers"
	"log"
)

func init() {
	beego.InsertFilter("*", beego.BeforeRouter, func(ctx *context.Context) {
		log.Println("No I am here")
		log.Println(ctx.Request.Header.Get("Origin"))
		if origin := ctx.Request.Header.Get("Origin"); origin != "" {
			ctx.Output.Header("Access-Control-Allow-Origin", origin)
			ctx.Output.Header("Access-Control-Allow-Credentials", "true")
			ctx.Output.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			ctx.Output.Header("Access-Control-Allow-Headers",
				"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		}
	})

	beego.Router("/users", &controllers.UsersController{})
	beego.Router("/api/sign-in", &controllers.AuthController{}, "post:SignIn")
	beego.Router("/sign-out", &controllers.AuthController{}, "get:SignOut")
	beego.Router("/check-auth", &controllers.AuthController{}, "get:CheckAuth")

	ns := beego.NewNamespace("/api",
		beego.NSNamespace("/v1",
			beego.NSBefore(func(ctx *context.Context) {
				log.Println("I am here")
				log.Println(ctx.Request.Header.Get("Origin"))
				if origin := ctx.Request.Header.Get("Origin"); origin != "" {
					//ctx.Output.Header("Access-Control-Allow-Origin", "http://localhost:9000/")
					ctx.ResponseWriter.Header().Set("Access-Control-Allow-Origin", "http://localhost:9000/")
					ctx.Output.Header("Access-Control-Allow-Credentials", "true")
					ctx.Output.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
					ctx.Output.Header("Access-Control-Allow-Headers",
						"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

				}
			}),
			beego.NSRouter("/users", &controllers.UsersController{}),
			beego.NSRouter("/sign-in", &controllers.AuthController{}, "post:SignIn"),
			beego.NSRouter("/sign-out", &controllers.AuthController{}, "get:SignOut"),
			beego.NSRouter("/check-auth", &controllers.AuthController{}, "get:CheckAuth"),
		),
	)
	beego.AddNamespace(ns)

}
