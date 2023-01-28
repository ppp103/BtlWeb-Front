const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector(".search");
// Click vào thanh tìm kiếm -> border đen
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("search-box")) {
    searchBar.classList.add("active");
  } else {
    searchBar.classList.remove("active");
  }
});

// Click icon tìm kiếm -> hiện thanh search
searchBtn.addEventListener("click", function (e) {
  searchBar.classList.toggle("clicked");
});

//slide
var swiper = new Swiper(".book-slider", {
  loop: true,
  spaceBetween: 0,
    breakpoints:{
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    }
});

var swiper = new Swiper(".customer-slider", {
  loop: true,
  centerSlide: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
