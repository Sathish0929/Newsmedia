// Define an array of news articles
const newsArticles = [
  {
    title: 'Article Title 1',
    summary: 'This is the summary for article 1.',
    image: 'https://via.placeholder.com/150x150',
    link: '#'
  },
  {
    title: 'Article Title 2',
    summary: 'This is the summary for article 2.',
    image: 'https://via.placeholder.com/150x150',
    link: '#'
  },
  {
    title: 'Article Title 3',
    summary: 'This is the summary for article 3.',
    image: 'https://via.placeholder.com/150x150',
    link: '#'
  }
];

// Define a function to display the news articles
function displayArticles() {
  // Get the news section element
  const newsSection = document.querySelector('.news');

  // Create a new div for each news article and append it to the news section
  newsArticles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
    articleDiv.innerHTML = `
      <img src="${article.image}" alt="Article Image">
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <a href="${article.link}">Read More</a>
    `;
    newsSection.appendChild(articleDiv);
  });
}

// Call the displayArticles function when the page loads
window.addEventListener('load', displayArticles);
