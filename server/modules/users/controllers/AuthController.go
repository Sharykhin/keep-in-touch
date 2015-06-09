package controllers

import (
	"crypto/sha512"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"github.com/astaxie/beego/session"
	"github.com/astaxie/beego/validation"
	userModel "keep-in-touch/server/modules/users/models"
	services "keep-in-touch/server/services"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"
)

var globalSessions *session.Manager

func init() {
	//Initialzie session storage
	globalSessions, _ = session.NewManager("memory", `{"cookieName":"gosessionid", "enableSetCookie,omitempty": true, "gclifetime":3600, "maxLifetime": 3600, "secure": false, "sessionIDHashFunc": "sha1", "sessionIDHashKey": "", "cookieLifeTime": 3600, "providerConfig": ""}`)
	go globalSessions.GC()
}

type AuthController struct {
	beego.Controller
}

// Sign In user in the system by email and password (which hashed by sha512)
func (this *AuthController) SignIn() {
	// Get Session Manager
	sess, err := globalSessions.SessionStart(this.Ctx.ResponseWriter, this.Ctx.Request)
	log.Printf("%T", sess)
	if err != nil {
		beego.Error(err)
		return
	}
	// Initialize a new orm
	o := orm.NewOrm()
	o.Using("default")
	// Initialzie user
	var user userModel.User
	// Get data from request body
	data := this.Ctx.Input.RequestBody
	//Initialzie error service
	var errorService services.ErrorService

	//Convert json to struct
	if err := json.Unmarshal(data, &user); err != nil {
		this.Data["json"] = errorService.ServerError(err)
		this.ServeJson()
		beego.Error(err)
		return
	}

	//Apply validation rules to the received data
	valid := validation.Validation{}
	valid.Email(strings.TrimSpace(user.Email), "email")
	valid.Required(strings.TrimSpace(user.Password), "password")

	if valid.HasErrors() {
		this.Data["json"] = errorService.ValidationErrors(valid)
		this.ServeJson()
		return
	}
	// @TODO: create a service to work with crypto
	h := sha512.New()
	h.Write([]byte(user.Password))
	hashedPassword := hex.EncodeToString(h.Sum(nil))
	user.Password = hashedPassword
	err = o.QueryTable("user").Filter("email", user.Email).Filter("password", hashedPassword).One(&user)

	if err == orm.ErrMultiRows {

		this.Data["json"] = errorService.ServerError(err)
		this.ServeJson()
		return
	}

	// If user exists, show error message
	if err == orm.ErrNoRows {
		this.Data["json"] = services.ResponseData{Code: 200, Success: false, Errors: "Email or password is invalid"}
		this.ServeJson()
		return
	}
	//Set user ID to session
	sess.Set("id", fmt.Sprint(user.Id))
	// Encode user ID by using sha512
	h = sha512.New()
	h.Write([]byte(fmt.Sprint(user.Id)))
	hashedId := hex.EncodeToString(h.Sum(nil))
	// Set cookie with hashed user id
	expiration := time.Now().Add(365 * 24 * time.Hour)
	cookie := http.Cookie{Name: "keepintouch", Value: hashedId, Expires: expiration}
	http.SetCookie(this.Ctx.ResponseWriter, &cookie)
	// Set response data
	this.Data["json"] = services.ResponseData{Code: 200, Success: true, Data: user}
	this.ServeJson()

}

func (this *AuthController) SignOut() {

	sess, err := globalSessions.SessionStart(this.Ctx.ResponseWriter, this.Ctx.Request)
	if err != nil {
		beego.Error(err)
		return
	}
	//log.Print(sess.Get("id"))
	log.Println(sess.SessionID())
	sess.Delete("id")
	expiration := time.Now().Add(-1 * time.Second)
	cookie := http.Cookie{Name: "keepintouch", Value: "", Expires: expiration}
	http.SetCookie(this.Ctx.ResponseWriter, &cookie)
	this.Data["json"] = services.ResponseData{Code: 200, Success: true}
	this.ServeJson()

}

func (this *AuthController) CheckAuth() {
	sess, err := globalSessions.SessionStart(this.Ctx.ResponseWriter, this.Ctx.Request)
	if err != nil {
		beego.Error(err)
		return
	}

	var id string
	// Get user id from session storage and convet it to sting
	id = sess.Get("id").(string)

	// Get hashed value of current id by using sha512
	h := sha512.New()
	h.Write([]byte(fmt.Sprint(id)))
	sessionId := hex.EncodeToString(h.Sum(nil))

	// Get cookie value
	hashedId := this.Ctx.Input.Cookie("keepintouch")
	// If hashes are equal, user is authorized
	if sessionId == hashedId {
		userId, _ := strconv.Atoi(id)
		user := userModel.User{Id: userId}
		o := orm.NewOrm()
		o.Using("default")
		err := o.Read(&user)
		if err != nil {
			beego.Error(err)
			return
		}
		user.Password = ""
		this.Data["json"] = services.ResponseData{Code: 200, Success: true, Data: user}
	} else {
		this.Data["json"] = services.ResponseData{Code: 200, Success: false, Data: hashedId}
	}

	this.ServeJson()
}
