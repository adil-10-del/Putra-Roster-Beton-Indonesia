document.addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById("articleList");
  if (!list) {
    console.error("articleList tidak ditemukan");
    return;
  }

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
      renderArticles(articles);
    })
    .catch(err => {
      console.error(err);
      renderArticles(articles); // tetap render walau gambar gagal
    });

  // =============================
  // RENDER
  // =============================
  function renderArticles(data) {
    list.innerHTML = "";

    if (!data || data.length === 0) {
      list.innerHTML = `<p class="text-center">Artikel belum tersedia</p>`;
      return;
    }

    data.forEach(a => {
      const img = randomImage(a.category);

      list.innerHTML += `
      <div class="article-card">
  <div class="article-img-box">
    <img src="${img}" alt="${a.title}">
  </div>

  <div class="content">
    <h3>${a.title}</h3>
    <p>${a.excerpt}</p>
    <a href="artikel-detail.html?slug=${a.slug}"
       class="btn btn-danger btn-sm">
      Baca Selengkapnya
    </a>
  </div>
</div>
      `;
    });
  }

  // =============================
  // SEARCH
  // =============================
  document.getElementById("searchInput")
    ?.addEventListener("input", e => {
      const q = e.target.value.toLowerCase();
      renderArticles(
        articles.filter(a =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
        )
      );
    });

});
