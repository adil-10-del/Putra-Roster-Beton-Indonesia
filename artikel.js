const articles = [
  {
    title: "Keunggulan Roster Beton untuk Rumah Modern",
    img: "assets/images/artikel/roster.jpg",
    excerpt: "Roster beton memberikan ventilasi alami sekaligus estetika modern.",
    link: "artikel-roster.html"
  },
  {
    title: "Wallpanel Beton untuk Bangunan Industrial",
    img: "assets/images/artikel/wallpanel.jpg",
    excerpt: "Wallpanel beton cocok untuk fasad dan interior industrial.",
    link: "artikel-wallpanel.html"
  },
  {
    title: "Tips Memilih Paving Beton Berkualitas",
    img: "assets/images/artikel/paving.jpg",
    excerpt: "Paving beton berkualitas menentukan kekuatan area luar bangunan.",
    link: "artikel-paving.html"
  }
];

const articleList = document.getElementById("articleList");
const searchInput = document.getElementById("searchInput");

function renderArticles(filter = "") {
  articleList.innerHTML = "";

  articles
    .filter(a => a.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(a => {
      articleList.innerHTML += `
        <div class="col-md-4">
          <div class="article-card">
            <img src="${a.img}" alt="${a.title}">
            <div class="content">
              <h3>${a.title}</h3>
              <p>${a.excerpt}</p>
              <a href="${a.link}" class="btn btn-outline-danger btn-sm">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      `;
    });
}

searchInput.addEventListener("input", e => {
  renderArticles(e.target.value);
});

renderArticles();
