const articles = [
  {
    slug: "manfaat-roster-beton",
    title: "Manfaat Roster Beton untuk Hunian Modern",
    date: "12 Januari 2026",
    author: "Admin Putra Roster",
    image: "assets/images/artikel/roster.jpg",
    content: `
      <p>Roster beton adalah material bangunan yang berfungsi sebagai ventilasi sekaligus elemen estetika.</p>

      <h2>1. Sirkulasi Udara Alami</h2>
      <p>Roster memungkinkan udara masuk dengan baik tanpa mengurangi privasi.</p>

      <h2>2. Tampilan Estetik</h2>
      <p>Desain roster beton memberikan kesan modern dan industrial.</p>

      <h2>3. Kuat & Tahan Lama</h2>
      <p>Terbuat dari beton berkualitas yang tahan cuaca dan usia panjang.</p>
    `
  }
];

// ambil slug dari URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

// cari artikel
const article = articles.find(a => a.slug === slug);

// render
if (article) {
  document.getElementById("articleTitle").innerText = article.title;
  document.getElementById("articleMeta").innerText =
    `${article.date} • ${article.author}`;
  document.getElementById("articleImage").src = article.image;
  document.getElementById("articleContent").innerHTML = article.content;
}
