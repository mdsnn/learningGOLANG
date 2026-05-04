package main

import "fmt"

type Product struct {
	ID      int
	Name    string
	Price   float64
	InStock bool
}

func (p Product) Label() string {
	return fmt.Sprintf("%s - $%.2f", p.Name, p.Price)
}

func (p *Product) MarkOutOfStock() {
	p.InStock = false
}
func (p *Product) ApplyDiscount(percent float64) {
	discount := p.Price * (percent / 100)
	p.Price -= discount
}

func main() {
	product := Product{
		ID:      1,
		Name:    "Laptop",
		Price:   1200,
		InStock: true,
	}

	product.MarkOutOfStock()
	product.ApplyDiscount(10)

	fmt.Println(product.Label())
	fmt.Println(product.InStock)

}
