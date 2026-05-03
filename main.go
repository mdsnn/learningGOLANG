package main

import "fmt"

type Product struct {
	ID      int
	Name    string
	Price   string
	InStock bool
}

func (p Product) Label() string {
	return p.Name + " -" + "$" + p.Price
}

func main() {
	product := Product{
		ID:      1,
		Name:    "laptop",
		Price:   "1200",
		InStock: true,
	}

	fmt.Println(product.Label())
}
