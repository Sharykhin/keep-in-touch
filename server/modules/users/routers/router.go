package routers

import (
	"github.com/astaxie/beego"
	"keep-in-touch/server/modules/users/controllers"
)

func init() {

	beego.Router(beego.AppConfig.String("APIURL")+"/users", &controllers.UsersController{})
	beego.Router(beego.AppConfig.String("APIURL")+"/sign-in", &controllers.AuthController{}, "post:SignIn")
	beego.Router(beego.AppConfig.String("APIURL")+"/sign-out", &controllers.AuthController{}, "get:SignOut")
	beego.Router(beego.AppConfig.String("APIURL")+"/check-auth", &controllers.AuthController{}, "get:CheckAuth")

}
