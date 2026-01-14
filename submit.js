document.getElementById("submitForm").addEventListener("submit", e => {
  e.preventDefault();

  const reader = new FileReader();
  const file = image.files[0];

  reader.onload = () => {
    const slug = title.value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const today = new Date().toISOString().split("T")[0];

    const html = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>${title.value} | Putra Roster Beton Indonesia</title>
<meta name="description" content="${excerpt.value}">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/blog.css">
</head>

<body>

<header class="header-small">
  <div class="navbar">
    <img src="../assets/images/logo.jpg" class="logo">
    <nav>
      <a href="../index.html">Home</a>
      <a href="../blog.html">Blog</a>
    </nav>
  </div>
</header>

<section class="article-hero">
  <img src="${reader.result}" alt="${title.value}">
</section>

<article class="article-container">
  <h1>${title.value}</h1>

  <div class="article-meta">
    <span>📅 ${today}</span>
    <span>🏷️ ${category.value}</span>
  </div>

  <div class="article-content">
    ${content.value.replace(/\n/g, "<br>")}
  </div>

  <div class="article-nav">
    <a href="../blog.html">← Kembali ke Blog</a>
  </div>
</article>

</body>
</html>
`;

    // DOWNLOAD FILE
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = slug + ".html";
    a.click();

    alert(
      "Artikel berhasil digenerate!\n\n" +
      "Langkah selanjutnya:\n" +
      "1. Upload file ke folder /blog/\n" +
      "2. Tambahkan data ke blog.json"
    );
  };

  reader.readAsDataURL(file);
});
