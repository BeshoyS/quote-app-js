
var quoteList = [
    {
        content: `“Be yourself; everyone else is already taken.”`,
        author: `― Oscar Wilde`
    },
    {
        content: `“So many books, so little time.”`,
        author: `― Frank Zappa`
    },
    {
        content: `“A room without books is like a body without a soul.”`,
        author: `― Marcus Tullius Cicero`
    },
    {
        content: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        author: `― Bernard M. Baruch`
    },
    {
        content: `“You only live once, but if you do it right, once is enough.”`,
        author: `― Mae West`
    },
    {
        content: `“If you tell the truth, you don't have to remember anything.”`,
        author: `― Mark Twain`
    },
    {
        content: `“Always forgive your enemies; nothing annoys them so much.”`,
        author: `― Oscar Wilde`
    }
];

function randomQuote() {
     
    var randomQuoteNum = quoteList[Math.floor(Math.random()* quoteList.length)];

    document.getElementById("quoteContent").innerHTML = randomQuoteNum.content;
    document.getElementById("quoteAuthor").innerHTML = randomQuoteNum.author;
}

