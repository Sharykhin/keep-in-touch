package services

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/validation"
	"log"
)

type ErrorService struct{}

func (service *ErrorService) ServerError(err error) ResponseData {
	errorData := ResponseData{Code: 500, Success: false, Errors: err.Error()}
	beego.Error(err)
	return errorData
}

func (service *ErrorService) ValidationErrors(valid validation.Validation) ResponseData {
	errorResponse := make(map[string]interface{})
	validationErrors := make(map[string]string)
	for _, err := range valid.Errors {
		validationErrors[err.Key] = err.Message
		log.Println(err.Key, err.Message)
	}
	errorResponse["validation"] = validationErrors
	errorData := ResponseData{Code: 200, Success: false, Errors: errorResponse}
	return errorData
}

func (service *ErrorService) ValidationCustomErrors(customerErrors interface{}) ResponseData {
	errorResponse := make(map[string]interface{})
	errorResponse["validation"] = customerErrors
	errorData := ResponseData{Code: 200, Success: false, Errors: errorResponse}
	return errorData
}
