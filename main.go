package main

import "fmt"

type User struct {
	ID    int
	Name  string
	Email string
}

func (u User) DisplayName() string {
	return u.Name + " <" + u.Email + ">"
}

func main() {
	user := User{
		ID:    1,
		Name:  "Alex",
		Email: "alex@example.com",
	}

	fmt.Println(user.DisplayName())
}
