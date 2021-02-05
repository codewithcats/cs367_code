package main

import (
	"fmt"
	"net/http"
	"strconv"
)

func add(w http.ResponseWriter, r *http.Request) {
	xs, _ := r.URL.Query()["x"]
	ys, _ := r.URL.Query()["y"]

	x, _ := strconv.ParseFloat(xs[0], 32)
	y, _ := strconv.ParseFloat(ys[0], 32)
	result := x + y

	w.Header().Add("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, fmt.Sprintf("%f", result))
}

func multiply(w http.ResponseWriter, r *http.Request) {
	xs, _ := r.URL.Query()["x"]
	ys, _ := r.URL.Query()["y"]

	x, _ := strconv.ParseFloat(xs[0], 32)
	y, _ := strconv.ParseFloat(ys[0], 32)
	result := x * y

	w.Header().Add("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, fmt.Sprintf("%f", result))
}

func main() {

	http.HandleFunc("/add", add)
	http.HandleFunc("/multiply", multiply)

	fmt.Printf("Starting Go server at port 8080\n")
	http.ListenAndServe(":8080", nil)
}
