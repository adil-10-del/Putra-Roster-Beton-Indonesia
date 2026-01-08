document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("articleDetail");
  if (!container) {
    console.error("articleDetail tidak ditemukan");
    return;
  }

  // =============================
  // GET SLUG
  // =============================
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    container.innerHTML = "<p>Artikel tidak ditemukan</p>";
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
      renderDetail();
    })
    .catch(err => {
      console.error(err);
      renderDetail(); // tetap render walau image gagal
    });

  // =============================
  // RENDER DETAIL
  // =============================
  function renderDetail() {
    const article = articles.find(a => a.slug === slug);

    if (!article) {
      container.innerHTML = "<p>Artikel tidak ditemukan</p>";
      return;
    }

    const img = randomImage(article.category); // ⬅️ INI KUNCINYA

    container.innerHTML = `
      <div class="article-card article-detail">

        <div class="article-img-box">
          <img src="${img}" alt="${article.title}">
        </div>

        <div class="content">
          <h1>${article.title}</h1>

          <div class="article-meta mb-4">
            ${article.date} · ${article.author}
          </div>

          <div class="article-content">
            ${article.content}
          </div>
        </div>

      </div>
    `;
  }

});
