package main

import (
	"fmt"
	"net/http"
)

func main() {
	links := []string{
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.org",
		"http://amazon.com",
	}

	for _, link := range links {
		// create a new thread go routing and run checkLink() with it
		go checkLink(link)
	}
}

func checkLink(link string) {
	// this is a 'blocking call' i.e. the main routine can't proceed 
	// until this line is done. Good place to use go routine when 
	// calling this function
	_, err := http.Get(link)
	if err != nil {
		fmt.Println(link, "might be down")
		return
	}
	fmt.Println(link, "is up")
}
