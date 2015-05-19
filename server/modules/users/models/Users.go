package models

import (
	"github.com/astaxie/beego/orm"
)

type User struct {
	Id       int
	Name     string `valid:"Required;Match(/^Bee.*/)"`
	Email    string `valid:"Email; MaxSize(100)"`
	Password string
}

func init() {
	orm.RegisterModel(new(User))
}
