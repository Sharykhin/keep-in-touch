package models

import (
	"github.com/astaxie/beego/orm"
)

type User struct {
	Id       int    `json:"id"`
	Name     string `valid:"Required;Match(/^Bee.*/)" json:"name"`
	Email    string `valid:"Email; MaxSize(100)" json:"email"`
	Password string `json:"password"`
}

func init() {
	orm.RegisterModel(new(User))
}
