const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const article = articles.find(a => a.slug === slug);

if (article) {
  document.title = article.title + " | Putra Roster Beton";
  document.getElementById("articleTitle").innerText = article.title;
  document.getElementById("articleMeta").innerText =
    `${article.date} • ${article.author}`;
  document.getElementById("articleImage").src = article.image;
  document.getElementById("articleContent").innerHTML = article.content;
}

