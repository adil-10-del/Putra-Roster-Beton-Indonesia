const articles = [
  {
    slug: "manfaat-roster-beton",
    title: "Manfaat Roster Beton untuk Hunian Modern",
    excerpt: "Roster beton berfungsi sebagai ventilasi sekaligus elemen estetika...",
    date: "12 Januari 2026",
    author: "Admin Putra Roster",
    image: "assets/images/artikel/roster.jpg",
    content: `
      <p>Roster beton adalah material bangunan multifungsi.</p>

      <h2>Sirkulasi Udara Alami</h2>
      <p>Udara tetap mengalir tanpa mengorbankan privasi.</p>

      <h2>Tampilan Modern</h2>
      <p>Cocok untuk konsep industrial & minimalis.</p>
    `
  },

  {
    slug: "wallpanel-beton-modern",
    title: "Wallpanel Beton untuk Tampilan Industrial",
    excerpt: "Wallpanel beton memberikan kesan kokoh dan modern...",
    date: "15 Januari 2026",
    author: "Admin Putra Roster",
    image: "assets/images/artikel/wallpanel.jpg",
    content: `
      <p>Wallpanel beton cocok untuk interior dan eksterior.</p>
      <h2>Kuat & Tahan Lama</h2>
      <p>Perawatan minimal dan usia panjang.</p>
    `
  }
];
let imageManifest = {};

fetch("assets/images/artikel/images.json")
  .then(res => res.json())
  .then(data => imageManifest = data);

function randomImage(category) {
  const list = imageManifest[category];
  if (!list || list.length === 0) {
    return "assets/images/artikel/default.jpg";
  }
  const rand = Math.floor(Math.random() * list.length);
  return `assets/images/artikel/${list[rand]}`;
}
