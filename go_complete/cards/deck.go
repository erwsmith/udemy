package main

import (
	"fmt"
	"os"
	"strings"
	"math/rand"
	"time"
)

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

func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func deal(d deck, handsize int) (deck, deck) {
	// return hand, updated deck
	return d[0:handsize], d[handsize:]
}

// error is a type, 0666 means anyone can read or write
func (d deck) saveToFile(filename string) error {
	return os.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile(filename string) deck {
	bs, err := os.ReadFile(filename)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	
	s := strings.Split(string(bs), ",")
	return deck(s)
}

func (d deck) shuffle() {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	
	for i := range d {
		newPosition := r.Intn(len(d) - 1)
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}