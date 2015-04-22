package routers

import (
	"github.com/astaxie/beego"
	"keep-in-touch/server/controllers"
)

func init() {
	beego.Router("/", &controllers.EchoController{})
}
