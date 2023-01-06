package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

type logWriter struct{}

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
	// io.Copy(os.Stdout, resp.Body)

	// example using our own func that implements the Writer interface
	lw := logWriter{}
	io.Copy(lw, resp.Body)
}

// function that implements the Writer interface
func (logWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	fmt.Printf("Just wrote %v bytes to Terminal", len(bs))
	return len(bs), nil
}
