const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const container = document.getElementById("articleDetail");

const article = articles.find(a => a.slug === slug);

if (!article) {
  container.innerHTML = "<p>Artikel tidak ditemukan.</p>";
} else {
  const img = randomImage(article.category);

  container.innerHTML = `
    <div class="article-detail-card">
      <div class="article-img-box mb-4">
        <img src="${img}" alt="${article.title}">
      </div>

      <h1 class="mb-2">${article.title}</h1>
      <div class="article-meta mb-4">
        ${article.date} · ${article.author}
      </div>

      <div class="article-content">
        ${article.content}
      </div>
    </div>
  `;
}
