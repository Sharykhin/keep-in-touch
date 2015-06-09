package services

type ResponseData struct {
	Code    int         `json:"code"`
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
	Errors  interface{} `json:"errors"`
}
