package main

// import "fmt"


func main() {
	// VARIABLE BASICS
	// bool, string, int, float64 are basic types in go
	
	// var card string  = "Ace of Spades"
	
	// := operator relies on Go to assign var type when initializing: 
	// card := "Ace of Spades"
	// assign new value to existing variable, no need for := operator
	// card = "Five of Diamonds"
	// fmt.Println(card)
	
	// var deckSize int
	// deckSize = 52
	// fmt.Println(deckSize)

	// card := newCard()
	// fmt.Println(card)

	// CALLING FUNCTION FROM ANOTHER FILE IN SAME PACKAGE
	// no need to import
	printState()
}


// indicate the type of the value returned by the function will be 'string'
func newCard() string {
	return "Five of Diamonds"
}
