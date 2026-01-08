// =============================
// IMAGE MANIFEST
// =============================
let imageManifest = {};

// Random image by category
function randomImage(category) {
  const list = imageManifest[category];
  if (!list || list.length === 0) {
    return "assets/images/artikel/default.jpg";
  }
  const rand = Math.floor(Math.random() * list.length);
  return `assets/images/artikel/${list[rand]}`;
}

// =============================
// ARTICLE DATA
// =============================
const articles = [
  {
    slug: "manfaat-roster-beton",
    title: "Manfaat Roster Beton untuk Hunian Modern",
    excerpt: "Roster beton berfungsi sebagai ventilasi sekaligus estetika...",
    category: "roster",
    date: "12 Januari 2026",
    author: "Admin Putra Roster",
    content: `
      <p>Roster beton adalah material multifungsi.</p>
      <h2>Sirkulasi Udara Alami</h2>
      <p>Udara tetap mengalir tanpa mengorbankan privasi.</p>
    `
  }
];
