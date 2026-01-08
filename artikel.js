const list = document.getElementById("articleList");

function renderArticles(data) {
  list.innerHTML = "";
  data.forEach(a => {
    list.innerHTML += `
      <div class="col-md-4">
        <div class="article-card">
          <img src="${a.image}">
          <div class="content">
            <h3>${a.title}</h3>
            <p>${a.excerpt}</p>
            <a href="artikel-detail.html?slug=${a.slug}"
               class="btn btn-danger btn-sm">
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

renderArticles(articles);

// SEARCH
document.querySelector(".search-box input").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  renderArticles(
    articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q)
    )
  );
});

