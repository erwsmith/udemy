package main

import "fmt"

// Define type contactInfo that is of type struct
type contactInfo struct {
	email string
	zipCode int
}

// Define type person that is of type struct with various fields e.g. firstName
type person struct {
	firstName string
	lastName string
	adminStatus bool
	employeeID int
	// type contactInfo is defined elsewhere and can be added as a person field like this: 
	contactInfo
}

// Go is a 'Pass by Value' language, uses pointers to memory locations
// turn value into address with '&'
// turn address into value with '*'


func main() {
	// create a value of type 'person'
	alex := person{
		firstName: "Alex", 
		lastName: "Anderson", 
		adminStatus: true, 
		employeeID: 1,
		contactInfo: contactInfo{
			email: "alex@example.com", 
			zipCode: 84105,
		},
	}
	// Enable updating of alex by using a pointer
	// '&' gives the memory address of the variable that follows
	// alexPointer := &alex
	// alexPointer.updateName("Alexandra")

	// Shortcut to do the above, since we use *person in the receiver in updateName()
	alex.updateName("Alexandra")

	alex.print()
}

// '*' when put before a type is different from '*' in front of a variable.
// '*person' in the receiver below is the type 'pointer to person'
func (pointerToPerson *person) updateName(newFirstName string) {
	// '*' gives us the value at the memory address
	(*pointerToPerson).firstName = newFirstName
}


func (p person) print() {
	fmt.Printf("%+v", p)
}