const products = [
  {
    id: 0,
    image: "./assets/img/p1.png",
    title: "VS Pace Mens Trainers",
    price: 120,
    discount: 50,
  },
  {
    id: 1,
    image: "./assets/img/p2.png",
    title: "Infernus V3",
    price: 100,
    discount: 0,
  },
  {
    id: 2,
    image: "./assets/img/p3.png",
    title: "Alpha All-Purpose Gen Z",
    price: 20,
    discount: 30,
  },
  {
    id: 3,
    image: "./assets/img/p4.png",
    title: "A11 Sky",
    price: 20,
    discount: 15,
  },
  {
    id: 4,
    image: "./assets/img/p5.png",
    title: "Urban Tracks ",
    price: 100,
    discount: 0,
  },
  {
    id: 5,
    image: "./assets/img/p6.png",
    title: "Court Vision",
    price: 20,
    discount: 0,
  },
  {
    id: 6,
    image: "./assets/img/p7.png",
    title: "Classic Core 99",
    price: 20,
    discount: 15,
  },
  {
    id: 7,
    image: "./assets/img/p8.png",
    title: "Quick Pace V2",
    price: 100,
    discount: 10,
  },
  {
    id: 8,
    image: "./assets/img/p9.png",
    title: "Air Max T6 Waterproof ",
    price: 20,
    discount: 0,
  },
  {
    id: 9,
    image: "./assets/img/p10.png",
    title: "High Breed F2",
    price: 20,
    discount: 40,
  },
];
const inputProductsName = document.querySelector("input ");
const allProducts = document.getElementById("all-products");
const cartIcon = document.getElementById("cartIcon");
const overlay = document.getElementById("overlay");
const cart = document.getElementById("cart");
let filteredProducts;

cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
  cart.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  cart.style.display = "none";
});

const readProduct = (shose) => {
  allProducts.innerHTML = "";
  let productShown = shose.length != 0 ? shose : products;

  productShown.forEach((product) => {
    allProducts.innerHTML += `
   
         <div class="box">
          ${
            product.discount != 0
              ? ` <span class='discount'> ${product.discount} % OFF </span>`
              : ""
          }
          <div class="img-box">
            <img class="images" src="${product.image}" alt="" />
          </div>
          <div class="bottom">
            <p> ${product.title}</p>

            <div><span>${
              product.discount != 0
                ? product.price - (product.price * product.discount) / 100
                : product.price
            }$</span><del>${
      product.discount != 0 ? product.price + "$" : ""
    }</del></div>
            <button >Add to cart</button>
          </div>

  `;
  });
};

inputProductsName.addEventListener("input", (e) => {
  let inputSarch = e.target.value;
  filteredProducts = products.filter((product) => {
    let productTitle = product.title;
    if (productTitle.toLowerCase().includes(inputSarch)) {
      return product;
    }
  });

  readProduct(filteredProducts);
});
readProduct([]);
