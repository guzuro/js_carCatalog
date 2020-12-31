//car list
const items = [{
      id: 1,
      name: "Audi A7",
      tag: "audi",
      price: "$250k",
      image: "./img/car1.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cum
      fugiat aliquid sapiente veniam saepe rerum blanditiis, ducimus assumenda dolore nam, qui,
      voluptatum sit molestias facere aspernatur. Ipsam, nisi assumenda.`,
   },
   {
      id: 2,
      name: "Volkswagen Golf MK2",
      tag: "volkswagen",
      price: "$150k",
      image: "./img/car2.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cum
      fugiat aliquid sapiente veniam saepe rerum blanditiis, ducimus assumenda dolore nam, qui.`,
   },
   {
      id: 3,
      name: "Honda Civic MK6",
      tag: "honda",
      price: "SOLD",
      image: "./img/car3.jpg",
      text: `Lorem ipsum dolor sit amet consectetur. Sequi cum
      fugiat aliquid sapiente veniam saepe rerum blanditiis, ducimus assumenda dolore nam, qui,
      voluptatum sit molestias facere aspernatur.`,
   },
   {
      id: 4,
      name: "Audi A6",
      tag: "audi",
      price: "$140k",
      image: "./img/car4.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cum
      fugiat aliquid sapiente facere aspernatur. Ipsam, nisi assumenda.`,
   },
   {
      id: 5,
      name: "Audi S4",
      tag: "audi",
      price: "$220k",
      image: "./img/car5.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cum
      fugiat aliquid sapiente veniam saepe rerum blanditiis, ducimus assumenda dolore nam, qui,
      voluptatum sit molestias facere aspernatur. Ipsam, nisi assumenda.`,
   },
   {
      id: 6,
      name: "Volkswagen Tiguan",
      tag: "volkswagen",
      price: "$550k",
      image: "./img/car6.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cum
      fugiat aliquid sapiente veniam saepe rerum blanditiis, ducimus assumenda dolore nam, qui,
      voluptatum sit.`,
   },
   {
      id: 7,
      name: "Volkswagen Polo",
      tag: "volkswagen",
      price: "$750k",
      image: "./img/car7.jpg",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cum
      fugiat aliquid sapiente veniam saepe rerum blanditiis, ducimus assumenda dolore nam, qui,
      voluptatum sit molestias.`,
   },
];
const filterButtons = document.querySelectorAll(".content__button");

window.addEventListener("DOMContentLoaded", function () {
   displayCarList(items);
});

filterButtons.forEach(button => {
   button.addEventListener("click", function (e) {
      let selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      e.target.classList.add('active');
      let chosenList = items.filter(item => item.tag == e.target.dataset.tag)
      if (e.target.dataset.tag == 'all') {
         displayCarList(items)
      } else {
         displayCarList(chosenList);
      }
   });

});

function displayCarList(carList) {
   let catalog = carList.map(item => {
      return `<div class="content__item item">
      <span class="item__cost">${item.price}</span>
      <div class="item__image">
         <img src="${item.image  }" alt="" class="image">
         </div>
      <div class="item__body">
      </div>
         <p class="item__title">${item.name}</p>
         <p class="item__description">${item.text}
         </p>
      </div>
   </div>`
   });
   let catalogDOM = catalog.join("");
   document.getElementById('list').innerHTML = catalogDOM;
}