package components

type ResponseData struct {
	Code    int         `json:"code"`
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
	Error   interface{} `json:"error"`
	Errors  []ErrorData
}

type ErrorData struct {
	Type    string
	Message string
}
