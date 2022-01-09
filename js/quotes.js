const quotes = [
    {
        quote: "I'd rather be hated for who I am, than loved for who I am not.",
        author: "Kurt Cobain",
    },
    {
        quote: "It's better to burn out than to fade away.",
        author: "Kurt Cobain",
    },
    {
        quote: "If you travel a lot, if you like roaming about in order to lose yourself, you can end up in the strangest places.",
        author: "Wim Wenders",
    },
    {
        quote: "The camera is a weapon against the tragedy of things, against their disappearing.",
        author: "Wim Wenders",
    },
    {
        quote: "You know how everyone's always saying seize the moment? I don't know, I'm kinda thinking it's the other way around. You know, like the moment seizes us.",
        author: "Boyhood, 2014",
    },
    {
        quote: "The Cosmos is all that is or was or ever will be.",
        author: "Carl Sagan",
    },
    {
        quote: "if you want to shine like sun first you have to burn like it.",
        author: "Adolf Hitler",
    },
    {
        quote: "Adventure is out there.",
        author: "Up, 2009",
    },
    {
        quote: "Normality is to be different. Every person is a different person. And one day you need to be aware of your difference. Aware that you are not the same as the others. That is to be normal.",
        author: "Alejandro Jodorowsky",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
quote.classList.add("white");
author.classList.add("white");
