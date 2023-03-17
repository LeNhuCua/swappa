let sidebar = document.querySelectorAll(".sidebar");
let menu = document.querySelectorAll(".menu");
let close = document.querySelectorAll(".close");
let block = document.getElementById("block");

var header = document.querySelector(".header");
header.addEventListener("click", (e) => {

  for (let j = 0; j < menu.length; j++) {
 
      if (!menu[j].contains(e.target)) {
        if(sidebar[j]) {
          sidebar[j].classList.remove("show");
          // block.classList.add('show');
        }
       
      }
  }
  console.log(block);
});
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function (e) {
    sidebar[i].classList.toggle("show");
    block.classList.toggle("show");

  });
}

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    sidebar[i].classList.remove("show");
    block.classList.remove("show");
  });
}


// close.addEventListener('click',function() {
//   sidebar.classList.remove('show');
//   block.classList.remove('show');

// })

block.addEventListener("click", function () {
  for (let i = 0; i < sidebar.length; i++) {
    sidebar[i].classList.remove("show");
  }

  block.classList.remove("show");
});




const third = document.querySelectorAll('.main-list :nth-child(3) .card .image');
console.log(third); // 👉️ div.child3

// const odd = document.querySelectorAll('#parent :nth-child(odd)');
// console.log(odd); // 👉️ [div.child1, div.child3]



var swiper = new Swiper(".mySwiper", {

  navigation: {
    prevEl: ".pre-btn",
    nextEl: ".nxt-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
   1500: {
      slidesPerView: 4,
      spaceBetween:30,
    },
  },
});