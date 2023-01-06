package main

import (
	"fmt"
	"io"
	"os"
)

type txtWriter struct{}

func main() {
	f, err := os.Open(os.Args[1])

	if err != nil {
		fmt.Println("Error: ", err)
		os.Exit(1)
	}

	tw := txtWriter{}
	io.Copy(tw, f)
}

func (txtWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	return len(bs), nil
}
