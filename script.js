

const quoteInput = document.getElementById('quote-input');
const addQuoteButton = document.getElementById('add-quote-button');
const quoteList = document.getElementById('quote-list');
const authorInput = document.getElementById('author-input')

document.addEventListener('DOMContentLoaded',displayQuotes)
addQuoteButton.addEventListener('click',addQuote)


function addQuote(){
    const quoteText = quoteInput.value.trim();
    const author = authorInput.value.trim();

    if(quoteText ==="" || author ===""){
        alert("please fill out both fields")
        return;
    }

    const quote ={
        text: quoteText,
        author: author,
    };

    const key = "quote_" + Date.now();

    localStorage.setItem(key, JSON.stringify(quote));

    quoteInput.value = "";
    authorInput.value="";
    displayQuotes()
}

function displayQuotes(){
    quoteList.innerHTML=""
    for(let i=0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        if(key.startsWith("quote_")){
            const quote =JSON.parse(localStorage.getItem(key));

            const li = document.createElement('li')
            li.textContent= `${quote.text} - ${quote.author}`

            const removeBtn = document.createElement('button');
            removeBtn.textContent="remove";
            removeBtn.addEventListener('click', function(){removeQuote(key)})
            
            li.appendChild(removeBtn)
            quoteList.appendChild(li)
        }
    }
}

function removeQuote(key){
    localStorage.removeItem(key)
    displayQuotes()
}

