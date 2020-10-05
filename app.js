document.querySelector('.get-quotes').addEventListener('click', getQuotes);
let output = '';
// const number = document.querySelector('input[type="number"]').value;

function getQuotes(e) {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            const maxQuotesNum = 1642;
            let number = Math.floor(Math.random() * Math.floor(maxQuotesNum));
            console.log(number + ' - ' + data[number].text)
            output += `<li>${data[number].text}</li>`;
            document.querySelector('.quotes').innerHTML = output;
        });

    e.preventDefault();
}