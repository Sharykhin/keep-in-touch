package test

import (
	"encoding/json"
	services "keep-in-touch/server/services"
	"log"
	"testing"
)

func TestEmpty(t *testing.T) {
	response := services.ResponseData{Code: 200, Success: true}
	res, err := json.Marshal(response)
	if err != nil {
		t.Error(err.Error())
	}

	var resString string = string(res)
	var testString string = "{\"code\":200,\"success\":true,\"data\":null,\"errors\":null}"

	if resString != testString {
		t.Error("json outputs are not equal")
		log.Println(resString)
		log.Println(testString)
	}

}

func TestWithData(t *testing.T) {
	type TestData struct {
		Name string `json:"name"`
		Age  int    `json:"age"`
	}
	person := TestData{Name: "Jhon", Age: 45}
	response := services.ResponseData{Code: 200, Success: true, Data: person}
	res, err := json.Marshal(response)
	if err != nil {
		t.Error(err.Error())
	}

	var testString string = "{\"code\":200,\"success\":true,\"data\":{\"name\":\"Jhon\",\"age\":45},\"errors\":null}"
	var resString string = string(res)

	if resString != testString {
		t.Error("json outputs are not equal")
		log.Println(resString)
		log.Println(testString)
	}

}

func TestWithErrors(t *testing.T) {
	type ErrorData struct {
		Validation interface{} `json:"validation"`
	}

	validationError := ErrorData{Validation: map[string]string{"email": "The current email is already in use"}}
	response := services.ResponseData{Code: 200, Success: false, Errors: validationError}
	res, err := json.Marshal(response)
	if err != nil {
		t.Error(err.Error())
	}
	var testString string = "{\"code\":200,\"success\":false,\"data\":null,\"errors\":{\"validation\":{\"email\":\"The current email is already in use\"}}}"
	var resString string = string(res)

	if resString != testString {
		t.Error("json outputs are not equal")
		log.Println(resString)
		log.Println(testString)
	}

}
