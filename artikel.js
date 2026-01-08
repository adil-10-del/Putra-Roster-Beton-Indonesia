const list = document.getElementById("articleList");

// =============================
// LOAD IMAGE MANIFEST
// =============================
fetch("assets/images/artikel/images.json")
  .then(res => {
    if (!res.ok) throw new Error("images.json tidak ditemukan");
    return res.json();
  })
  .then(data => {
    imageManifest = data;
    renderArticles(articles); // ⬅️ WAJIB DI SINI
  })
  .catch(err => {
    console.error("Gagal load images.json:", err);
    renderArticles(articles); // fallback tanpa gambar
  });

// =============================
// RENDER ARTICLES
// =============================
function renderArticles(data) {
  list.innerHTML = "";

  data.forEach(a => {
    const img = randomImage(a.category);

    list.innerHTML += `
      <div class="col-md-4">
        <div class="article-card">
          <img src="${img}" alt="${a.title}">
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

// =============================
// SEARCH
// =============================
document.querySelector(".search-box input")
  ?.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    renderArticles(
      articles.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
      )
    );
  });

