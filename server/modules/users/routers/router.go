package routers

import (
	"github.com/astaxie/beego"
	"keep-in-touch/server/modules/users/controllers"
)

func init() {
	beego.Router("/users", &controllers.UsersController{})
}
