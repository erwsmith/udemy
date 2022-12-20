package main

import "fmt"
// Create a new type called 'deck'
// which is a slice of strings
// inherits 'string' methods
type deck []string 

// return a value of type 'deck'
func newDeck() deck {
	// create new variable of type 'deck'
	cards := deck{}

	cardSuits := []string{"Spades", "Hearts", "Diamonds", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value + " of " + suit)
		}
	}

	return cards
}


// Receiver definition, a variable of type 'deck' 
// can access this function called print()
// d is the copy (or instance) of the deck that 
// we're working with. Similar to 'this' or 'self'
func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}


func deal(d deck, handsize int) (deck, deck) {
	// return hand, updated deck
	return d[0:handsize], d[handsize:]
}

func (d deck) shuffle() deck{
	// TODO shuffle cards in d
	return d
}