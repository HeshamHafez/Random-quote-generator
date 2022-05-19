var quoteList = [
    {
        quote: "Be yourself; everyone else is already taken.",
        quoteAuthor: "Oscar Wilde"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        quoteAuthor: "Marilyn Monroe"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        quoteAuthor: "Albert Einstein"
    },
    {
        quote: "So many books, so little time.",
        quoteAuthor: "Frank Zappa"
    },
    {
        quote: "The best revenge is massive success.",
        quoteAuthor: "Frank Sinatra"
    },
    {
        quote: "Do not take life too seriously. You will not get out alive.",
        quoteAuthor: "Elbert Hubbard"
    }
]

function displayQuote(){
    var randomQuote = Number.parseInt(Math.random()*quoteList.length + 1);
    document.getElementById("quoteP").innerHTML = `\"${quoteList[randomQuote].quote}\"`;
    document.getElementById("authorP").innerHTML = `--${quoteList[randomQuote].quoteAuthor}`;
}