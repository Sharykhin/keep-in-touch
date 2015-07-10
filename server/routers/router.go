package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"keep-in-touch/server/controllers"
	userRoutes "keep-in-touch/server/modules/users/routers"
	"log"
)

func init() {

	beego.InsertFilter("*", beego.BeforeRouter, func(ctx *context.Context) {

		if origin := ctx.Request.Header.Get("Origin"); origin != "" {
			ctx.Output.Header("Access-Control-Allow-Origin", origin)
			ctx.Output.Header("Access-Control-Allow-Credentials", "true")
			ctx.Output.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			ctx.Output.Header("Access-Control-Allow-Headers",
				"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		}
	})

	beego.Router("/", &controllers.EchoController{})
	log.Println(userRoutes.NS)
	beego.AddNamespace(userRoutes.NS)
	log.Println("I am first")

	ns := beego.NewNamespace("/api").Namespace(
		beego.NewNamespace("/v1",
			beego.NSRouter("/", &controllers.EchoController{}),
		),
		userRoutes.NS,
	)
	beego.AddNamespace(ns)
	/*ns := beego.NewNamespace("/api",
		beego.NSNamespace("/v1",
			beego.NSRouter("/", &controllers.EchoController{}),
		),
	)
	beego.AddNamespace(ns)*/
}
