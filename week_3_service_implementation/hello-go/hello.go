package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "text/html")
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "Hello from Go!")
	})

	fmt.Printf("Starting Go server at port 8080\n")
	http.ListenAndServe(":8080", nil)
}
