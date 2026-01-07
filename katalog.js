document.addEventListener("DOMContentLoaded", () => {

  const products = [];

  function pushProducts(type, label, desc, total) {
    for (let i = 1; i <= total; i++) {
      products.push({
        name: `${label} Seri ${i}`,
        img: `${type}${i}.jpg`,
        desc: desc
      });
    }
  }

  // === DATA PRODUK ===
  pushProducts(
    "roster",
    "Roster Beton",
    "Ventilasi beton estetik dan kuat",
    10
  );

  pushProducts(
    "walpanel",
    "Wallpanel Beton",
    "Panel beton dekoratif modern",
    10
  );

  pushProducts(
    "bata",
    "Bata Ekspos",
    "Tampilan natural dan industrial",
    8
  );

  pushProducts(
    "genteng",
    "Genteng Beton",
    "Untuk atap rumah",
    8
  );

  pushProducts(
    "list",
    "Lisplang Beton",
    "Finishing atap rapi dan presisi",
    10
  );

  pushProducts(
    "paving",
    "Paving Beton",
    "Untuk halaman dan area parkir",
    7
  );

  // === RENDER ===
  const list = document.getElementById("productList");

  products.forEach(p => {

    const rating = (Math.random() * (5 - 4.5) + 4.5).toFixed(1);
    const reviews = Math.floor(Math.random() * 120) + 30;
    const sold = Math.floor(Math.random() * 900) + 100;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = "★".repeat(fullStars);
    if (halfStar) stars += "½";

    list.innerHTML += `
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

});


