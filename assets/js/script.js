const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector(".search");
const header = document.querySelector('.header-2');
const header1 = document.querySelector('.header-1')
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');
const glitchFix = document.querySelector('.glitch-fix');
const headerHeight = header1.offsetHeight
// Click vào thanh tìm kiếm -> border đen
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("search-box")) {
    searchBar.classList.add("active");
  } else {
    searchBar.classList.remove("active");
  }

  if(e.target.id !== "search-btn" && searchBar.classList.contains("clicked")){
    searchBar.classList.remove("clicked");
  }
});

// Click icon tìm kiếm -> hiện thanh search
searchBtn.addEventListener("click", function (e) {
  searchBar.classList.toggle("clicked");
});

window.addEventListener('scroll', function(e){
  if(this.scrollY > headerHeight){
    header.classList.add('sticky');
    glitchFix.style.paddingTop = `50px`;
  }else{
    header.classList.remove('sticky')
    glitchFix.style.paddingTop = '0px';
  }
})

//slide
var swiper = new Swiper(".book-slider", {
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".customer-slider", {
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 30,
  grabCursor: "true",
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//load on scroll
console.log(sections);
const revealSection = function (entries, observer) {
  console.log(entries);
  const [entry] = entries;
  console.log(entry);

  console.log(entry.isIntersecting);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
  // console.log(section);
});

