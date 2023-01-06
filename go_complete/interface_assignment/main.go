package main

import (
	"fmt"
	"math"
)

type shape interface {
	getArea() float64
}

type triangle struct {
	height float64
	base   float64
}

type square struct {
	sideLength float64
}

func main() {
	t := triangle{height: 1, base: 2}
	s := square{sideLength: 2}

	printArea(t)
	printArea(s)
}

func (s square) getArea() float64 {
	return math.Pow(s.sideLength, 2)
}

func (t triangle) getArea() float64 {
	return .5 * t.base * t.height
}

func printArea(s shape) {
	fmt.Println(s.getArea())
}
