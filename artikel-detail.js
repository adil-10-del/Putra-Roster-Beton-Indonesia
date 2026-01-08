const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const article = articles.find(a => a.slug === slug);

if (article) {
  const img = randomImage(article.category);

  document.title = article.title + " | Putra Roster Beton Indonesia";
  document.getElementById("articleTitle").innerText = article.title;
  document.getElementById("articleMeta").innerText =
    `${article.date} • ${article.author}`;
  document.getElementById("articleImage").src = img;
  document.getElementById("articleContent").innerHTML = article.content;
}


