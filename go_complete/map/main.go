package main

import "fmt"

func main() {
	// 2 ways to declare empty colors map with string types for keys & values
	// var colors map[string]string
	// colors := make(map[string]string)

	// create a map with string keys and string values.
	colors := map[string]string{
		"red": "#ff0000", 
		"blue": "4bf745",
	}

	// Add a key value pair to map
	colors["white"] = "ffffff"

	// remove pair from map
	delete(colors, "white")

	fmt.Println(colors)
}