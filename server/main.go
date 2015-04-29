package main

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	_ "keep-in-touch/server/modules/users/models"
	_ "keep-in-touch/server/routers"
)

var dbname string = "keep_in_touch"

func init() {

	orm.RegisterDriver("mysql", orm.DR_MySQL)

	orm.RegisterDataBase("default", "mysql", "root:pass4root@/"+dbname+"?charset=utf8")
}

func main() {

	name := "default"
	// Drop table and re-create.
	force := false

	// Print log.
	verbose := false

	// Error.
	err := orm.RunSyncdb(name, force, verbose)
	if err != nil {
		beego.Debug(err)
	}

	beego.Run()
}
