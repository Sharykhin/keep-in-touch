package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"keep-in-touch/server/controllers"
	_ "keep-in-touch/server/modules/users/routers"
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
	/*


		log.Println(userRoutes.NS)

		ns := beego.NewNamespace("/api",
			beego.NSNamespace("/v1",
				beego.NSRouter("/", &controllers.EchoController{}),
			),
		)
		ns.("/foo", &controllers.EchoController{})
		beego.AddNamespace(ns)*/

	// Register namespace of v1
	/*apiV1 := beego.NewNamespace("/v1").Namespace(
		userRoutes.NS,
	)
	beego.AddNamespace(apiV1)*/

	//Register global api namespace
	/*apiNs := beego.NewNamespace("/api").Namespace(
		apiV1,
	)
	beego.AddNamespace(apiNs)*/

}
