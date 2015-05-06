package components

type ResponseData struct {
	Code   int
	Data   interface{}
	Errors []ErrorData
}

type ErrorData struct {
	Type    string
	Message string
}
