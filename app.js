var quotes = [
  "A goal should scare you a little and excite you a lot. Joe Vitale",
  "The brain is wider than the sky. Emily Dickinson",
  "We have to do the best we are capable of. This is our sacred human responsibility. Albert Einstein",
  "You have as much laughter as you have faith. Martin Luther",
  "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. Robert Frost"
]

function newQuote() {
  // alert("hello")
  var randNum = Math.floor (Math.random() * (quotes.length))
  document.getElementById("quoteDisplay").innerHTML = quotes[randNum]
}