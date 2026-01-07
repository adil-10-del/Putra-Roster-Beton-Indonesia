const products = [
  { name: "Roster Beton", img: "roster.jpg", desc: "Ventilasi beton estetik" },
  { name: "Wallpanel Beton", img: "wallpanel.jpg", desc: "Panel beton dekoratif" },
  { name: "Bata Ekspos", img: "bata.jpg", desc: "Tampilan natural industrial" },
  { name: "Lisplang Beton", img: "lisplang.jpg", desc: "Finishing atap rapi" },
  { name: "Paving Beton", img: "paving.jpg", desc: "Area parkir & halaman" }
];

// DUPLIKASI SAMPAI 53 PRODUK
const productData = [];
for (let i = 0; i < 53; i++) {
  const base = products[i % products.length];
  productData.push({
    ...base,
    name: `${base.name} Seri ${i + 1}`
  });
}

const productList = document.getElementById("productList");

productData.forEach(p => {

  const rating = (Math.random() * (5 - 4.5) + 4.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 120) + 30;
  const sold = Math.floor(Math.random() * 900) + 100;

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  let stars = "★".repeat(fullStars);
  if (halfStar) stars += "½";

  productList.innerHTML += `
    <div class="col-md-4">
      <div class="product-card">

        <div class="product-img-box">
          <img src="assets/images/products/${p.img}" alt="${p.name}">
        </div>

        <h4>${p.name}</h4>
        <p>${p.desc}</p>

        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-text">${rating}</span>
        </div>

        <small class="product-meta">
          ${reviews} ulasan • ${sold}+ terjual
        </small>

        <a href="https://wa.me/6283863583008?text=Saya%20tertarik%20${encodeURIComponent(p.name)}"
           class="btn btn-danger product-btn">
          Konsultasi WhatsApp
        </a>

      </div>
    </div>
  `;
});
