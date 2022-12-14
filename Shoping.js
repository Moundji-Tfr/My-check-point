const Items = [
  {
    id: 1,
    title: "latte",
    desc: "latee cofee",
    img: "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwffcfc341/5760466995931_A_6691171_S01.png?sw=400&sh=400&sm=fit",
  },
  {
    id: 2,
    title: "cappucino",
    desc: "starbugs cappucino ",
    img: "https://th.bing.com/th/id/OIP.ap9-nFw67DZ3kPgNlyMoUwHaKu?w=134&h=194&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    title: "frappucino",
    desc: "starbugs frappucino ",
    img: "https://mms.businesswire.com/media/20140430005342/en/413603/5/Frappuccino.jpg?download=1",
  },
];
const container = document.querySelector(".Items");
const number = document.querySelector(".num");
const button = document.querySelector(".btn");
const basket = document.querySelector(".basket");
const shop = document.querySelector(".shop");
const overlay = document.querySelector(".overlay");

const newItems = [];
function AddToCart(id) {
  Items.forEach((i) => {
    if (i.id == id) {
      newItems.push({
        id: id,
        title: i.title,
        img: i.img,
        desc: i.desc,
      });
    }
  });
  addedToCartItem();
  number.textContent = newItems.length;
}
function addedToCartItem() {
  basket.innerHTML = "";
  newItems.forEach((i) => {
    basket.innerHTML += `
          <div class="shopItem">
                  <img src="${i.img}"/>
              <div class="content">
                  <h1>${i.title}</h1>
              </div>
              <button class="button" onclick="deletFromCart(${i.id})">Delete</button>
          </div>
                `;
  });
}

Items.map((i) => {
  container.innerHTML += `
      <div class="card">  
      <h1>${i.title}</h1>
      <img src="${i.img}"/>
      <p>${i.desc}</p>
      <button class="add" onclick="AddToCart(${i.id})"><img src="/shoping/icons/ajouter.png" alt="" /></button>
      </div
      `;
});

function deletFromCart(id) {
  const find = newItems.find((item) => item.id === id);
  const index = newItems.indexOf(find);
  newItems.splice(index, 1);
  number.textContent = newItems.length;
  addedToCartItem();
}

let clicked = false;

shop.addEventListener("click", () => {
  overlay.classList.toggle("active");
});
