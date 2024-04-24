document.addEventListener('DOMContentLoaded', () => {
    const queryInput = document.querySelector('#query');
    const formElement = document.querySelector('form');
    const resultsContainer = document.querySelector('#results');

    // Javascript Module 4: Exercises 1-4 //
    
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = queryInput.value;

        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => response.json())
            .then(data => {
                // Clear previous results
                resultsContainer.innerHTML = '';

                // Map the data to HTML elements
                data.map(item => {
                    const show = item.show;
                    const article = document.createElement('article');
                    const title = document.createElement('h2');
                    const url = document.createElement('a');
                    const imageMedium = document.createElement('img');
                    const summary = document.createElement('div');
                    // Set the content and attributes
                    title.textContent = show.name;
                    url.href = show.url;
                    url.textContent = show.url;
                    imageMedium.src = show.image && show.image.medium ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
                    imageMedium.alt = show.name;
                    summary.textContent = show.summary
                    // Add the elements to the DOM
                    article.appendChild(title);
                    article.appendChild(imageMedium);
                    article.appendChild(url);
                    article.appendChild(summary);

                    resultsContainer.appendChild(article);
                });
            });
    });
});