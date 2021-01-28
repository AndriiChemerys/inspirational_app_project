document.querySelector('.get-quotes').addEventListener('click', getQuotes);
let output = '';
let count = 0;
const quotesOnPageAmount = 5;
// const number = document.querySelector('input[type="number"]').value;

function getQuotes(e) {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            const maxQuotesNum = 1642;
            let number = Math.floor(Math.random() * Math.floor(maxQuotesNum));
            count++;

            output += `<li>${data[number].text}</li>`;
            document.querySelector('.quotes').innerHTML = output;

            // Clearing quotes ul element when quotes amount is bigger than quotesOnPageAmount          
            if(count % quotesOnPageAmount == 0) {
                output = ` `;
            }
        });

    e.preventDefault();
}