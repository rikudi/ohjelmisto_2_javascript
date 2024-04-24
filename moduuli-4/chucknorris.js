// Javascript Module 4: Exercises 5-6 //
const resultElement = document.getElementById('results');
const queryInput = document.getElementById('query');
const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
    // prevent the default form submission
    event.preventDefault();
    // get the value from the input field
    const query = queryInput.value;

    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            // clear previous results
            resultElement.innerHTML = '';
            // create a new article element
            const article = document.createElement('article');
            const p = document.createElement('p');
            // return the first value from the array
            p.textContent = data.result[0].value;
            // append the paragraph to the article
            article.appendChild(p);
            // append the article to the result element
            resultElement.appendChild(article);
        });
});
