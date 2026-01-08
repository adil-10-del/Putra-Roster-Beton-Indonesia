const list = document.getElementById("articleList");

function renderArticles(data) {
  list.innerHTML = "";

  data.forEach(a => {
    const img = randomImage(a.category); // ⬅️ PENTING

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
fetch("assets/images/artikel/images.json")
  .then(res => res.json())
  .then(data => {
    imageManifest = data;
  });
