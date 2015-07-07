package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
	"keep-in-touch/server/controllers"
	_ "keep-in-touch/server/modules/users/routers"
)

func init() {

	beego.InsertFilter("/api/v1", beego.BeforeRouter, func(ctx *context.Context) {
		ctx.Output.Header("Access-Control-Allow-Origin", "*")
	})
	beego.Router("/", &controllers.EchoController{})

	ns := beego.NewNamespace("/api",
		beego.NSNamespace("/v1",
			beego.NSBefore(func(ctx *context.Context) {
				ctx.Output.Header("Access-Control-Allow-Origin", "*")
			}),
			beego.NSRouter("/", &controllers.EchoController{}),
		),
	)
	beego.AddNamespace(ns)
}
