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
	contactInfo
}

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

	// Alternative way to create variable 'alex' of type person
	// var alex person
	// alex.firstName = "Alex"
	// alex.lastName = "Anderson"
	// alex.adminStatus = true
	// alex.employeeID = 1
	// alex.contact = contactInfo{email: "alex@example.com", zipCode: 84105}

	alex.updateName("Alexandra")
	alex.print()
}

func (p person) updateName(newFirstName string) {
	p.firstName = newFirstName
}

func (p person) print() {
	fmt.Printf("%+v", p)
}