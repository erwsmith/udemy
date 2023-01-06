package main

import "fmt"

// Define bot interface to use function with different argument types
// note that "getGreeting" matches the other functions 
// This is not a 'Concrete type' it's an 'Interface type'
type bot interface {
	getGreeting() string
} 

type englishBot struct{}
type spanishBot struct{}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)
}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting())
}

// If the receiver doesn't use the variable, you can omit it and just put the type
func (englishBot) getGreeting() string {
	// very custom logic to generate english greeting (pretend)
	return "Hi there"
}

func (spanishBot) getGreeting() string {
	// very custom logic to generate english greeting (pretend)
	return "Hola"
}