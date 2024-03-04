// let greeting = "Welcome,";
// let student = "sarandy";
// let img = "https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg";
// let des =
//   "Every field of study have some Principles and Basic concepts and if you master those concepts and principles";
// let greetingMsg = `${greeting} ${student} ,how are you ?`;
// console.log(greetingMsg);

// let card = `

// <div class="flex min-h-screen items-center justify-center">
//         <div class="grid grid-col-1 md:grid-col-2 lg:grid-col-3 p-5">
//             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img class="rounded-t-lg" src="${img}" alt="" />
//     </a>
//     <div class="p-5">
//         <a href="#">
//             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${student}</h5>
//         </a>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${des}</p>
//         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>
//         </div>
//         <div class="grid grid-col-1 md:grid-col-2 lg:grid-col-3 p-5">
//             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img class="rounded-t-lg" src="${img}" alt="" />
//     </a>
//     <div class="p-5">
//         <a href="#">
//             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${student}</h5>
//         </a>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${des}</p>
//         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>
//         </div>
//         <div class="grid grid-col-1 md:grid-col-2 lg:grid-col-3 p-5">
//             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img class="rounded-t-lg" src="${img}" alt="" />
//     </a>
//     <div class="p-5">
//         <a href="#">
//             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${student}</h5>
//         </a>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${des}</p>
//         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>
//         </div>
//       </div>




// `;

const cardData = [
    {
      img: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
      student: 'Vuth Sarandy',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2023/12/09/10/09/woman-8439000_1280.png',
      student: 'Vuth Sarandy',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2023/06/14/02/18/flowers-8062135_1280.jpg',
      student: 'Vy Eiliza',
      des: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg',
      student: 'Vy Eiliza',
      des: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    
  ];
  
  const container = document.querySelector('#course');
  
  cardData.forEach((card) => {
    const cardHTML = `

    <div class="flex flex-wrap justify-center">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img class="rounded-t-lg" src="${card.img}" alt="" />
  </a>
  <div class="p-5">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${card.student}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${card.des}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>
  </div>
  <!-- Add more cards as needed -->
</div>

    
      
    `;
    container.innerHTML += cardHTML;
  });



  

// <script>
//   // Sample card data
//   const cardData = [
//     { title: 'Card 1', description: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 2', description: 'Consectetur adipiscing elit.' },
//     { title: 'Card 3', description: 'Praesent quis libero fringilla.' },
//     { title: 'Card 4', description: 'Vestibulum pulvinar elit nec.' },
//   ];

//   // Function to generate card HTML
//   const generateCardHTML = (title, description) => {
//     return `
//       <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
//         <div class="bg-white border border-gray-200 rounded-lg shadow">
//           <div class="p-4">
//             <h3 class="text-lg font-semibold">${title}</h3>
//             <p class="text-gray-600">${description}</p>
//           </div>
//         </div>
//       </div>
//     `;
//   };

//   // Loop over card data and generate cards
//   const cardContainer = document.getElementById('cardContainer');
//   cardData.forEach((card) => {
//     const cardHTML = generateCardHTML(card.title, card.description);
//     cardContainer.innerHTML += cardHTML;
//   });
// </script>


// // render card to section id course

// let sectionCourse = document.querySelector("#course");
// sectionCourse.innerHTML = card;


// let a = 3
// let b = 4.5
// let c = 1_00_000
// let d = 3e4
// console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`)
// let result = a/0
// let result1 = c/student
// console.log(`result : = ${result}`)
// console.log(`result : = ${result1}, type of NaN : ${typeof result}`)

// // Boolean true false
// let isStudnt = true
// let isGradeA = true

// // 4. Undefined
// let teacher 
// console.log(`teacher is ${teacher}`) 

// // 5. null
// let instructor = {
//     name: "sarandy",
//     age: 18,
//     job: "teacher"
// }
// console.log(instructor)
// instructor = null
// console.log(instructor)


// Operator
// let x = 3;
// x **= 4; // Calculates 2 raised to the power of 3 (2 * 2 * 2) and assigns the result (8) to 'x'
// console.log(x); // Output: 8

// let num1 = prompt("Enter your num1")
// let num2 = prompt("Enter your num2")

// console.log(`num1: ${num1}`)
// console.log(`num2: ${num2}`)

// // arimetic operator
// let resultArea = document.getElementById("result")
// let output = parseInt(num1) + parseInt(num2)
// resultArea.innerHTML =`<h2>${output}</h2>`

// let isTeacher = true
// let msg = isTeacher ? "He is a teacher" : "He is a student"
// console.log(msg)

// let animal = {
//     name : 'KIKI',
// }
// animal.age ??=2
// console.log(animal.age)

// let phoneNumber
// let NULL_LISH = document.getElementById('nullish')
// NULL_LISH.innerHTML = `<h2 class " text-center ">Phone Number ${phoneNumber ?? "098898298"}</h2>`



let welcomeMessage = () => {
  document.write(`<h2 class="text-center">Welcome, Mr. Sarandy</h2>`);
};
welcomeMessage();

function greeting(name){
  document.querySelector(`header`).innerHTML += `helooo all my friend ${name}`
}
 greeting ("Sarandy")


//  function sum(x = 150, y = 220) {
//   return x + y;
// }

 let sum = (x, y) => x + y;
 console.log(sum(200,220));


 let x = (a,b) => a * b
 console.log(x(2,3))
 