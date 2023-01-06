package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	resp, err := http.Get("http://google.com/")
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// // create a byte slice with 99999 empty elements
	// bs := make([]byte, 99999)
	// // read the body of the response into the byte slice 'bs'
	// resp.Body.Read(bs)
	// // print bs as a string
	// fmt.Println(string(bs))

	// same as above 3 lines, but better
	io.Copy(os.Stdout, resp.Body)
}
