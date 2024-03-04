// syntax array

let arr = new Array();
let arr1 = [];

let student = new Array(10, "sarandy");
let teacher = ["Eiliza", "sarandy", "koko"];

console.log(student);
console.log("array index of array :", teacher[0]);
console.log("total item in array :", teacher.length);
console.log("access last index :", teacher[teacher.length - 3]);

let BASE_URL = "https://eduport.webestica.com/";
let products = [
  {
    name: "Iphone 16 pro max",
    price: 599,
    thumbnail: "/img/vision-pro.png",
  },
  {
    name: "Macbook",
    price: 769,
    thumbnail: "/img/Airpod.png",
  },
  {
    name: "Laptop",
    price: 2100,
    thumbnail: "/img/imac.png",
  },
  {
    name: "Monitor",
    price: 1600,
    thumbnail: "/img/iphone.png",
  },
  {
    name: "Monitor",
    price: 1600,
    thumbnail: "/img/sak.png",
  },
  {
    name: "Monitor",
    price: 1600,
    thumbnail: "/img/apple-watch.png",
  },
];

console.log(products[0].name);

products.map((product) => {
  console.log(product);
});

let SECTION = document.querySelector("section");
products.map((product) => {
  console.log(product);
  SECTION.innerHTML += ` 
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
      <img class="p-8 rounded-t-lg" src="${product.thumbnail}" alt="product image" />
  </a>
  <div class="px-5 pb-5">
      <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.name}</h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
      </div>
      <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
          <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
  </div>
</div>
    `;
});

// mark array
const fruits = ['Apple','Coco', 'Banana', 'Grape']

// Array copy
// 1
const fruitsCopy1 = [...fruits]
console.log('copy fruit 1: ', fruitsCopy1)
// 2
let fruitsCopy2 = Array.from(fruits)
console.log('copy fruit 2: ', fruitsCopy2)
// 3
let fruitsCopy3 = fruits.slice()
console.log('copy fruit 3: ', fruitsCopy3)
// 4
let fruitsCopy4 = fruits.slice(1,3)
console.log('copy fruit 4: ', fruitsCopy4)


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


