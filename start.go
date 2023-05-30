package main

import (
	"fmt"
	"net/http"
)

const port = "3000"

func main() {
    http.Handle("/", http.FileServer(http.Dir("./school")))

    fmt.Println("Server is listening on port ", port+".")
    http.ListenAndServe(":"+port, nil)
}