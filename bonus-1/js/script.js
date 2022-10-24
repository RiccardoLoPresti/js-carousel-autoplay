
const imgList = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
];

const imgWrapper = document.querySelector('.img-wrapper');
const carousel = document.querySelector('.carousel');
const element = document.getElementsByClassName('items');
const elementCarousel = document.getElementsByClassName('carousel-items');
const prev = document.querySelector('.up');
const next = document.querySelector('.down');
let imgTag = '';
let carouselTag = '';

const autoPlay = setInterval(function(){
  nextPhoto();
}, 3000);


for(let i = 0; i < imgList.length; i++){
  imgTag += `
    <img class="items" src="img/${imgList[i]}" alt="${imgList[i]}">
  `;
  carouselTag += `
    <img class="carousel-items" src="img/${imgList[i]}" alt="${imgList[i]}">
  `;
}

imgWrapper.innerHTML += imgTag;
carousel.innerHTML += carouselTag;

let elCounter = 0;

element[elCounter].classList.add('active');
elementCarousel[elCounter].classList.add('active');

next.addEventListener('click', function(){
  nextPhoto()
});

prev.addEventListener('click', function(){
  prevPhoto() 
});



function nextPhoto() {
  if(elCounter >= imgList.length - 1){
    elCounter = 0;
    element[elCounter].classList.add('active');
    element[imgList.length - 1].classList.remove('active');
    elementCarousel[elCounter].classList.add('active');
    elementCarousel[imgList.length - 1].classList.remove('active');
  }else{
    element[elCounter].classList.remove('active');
    elementCarousel[elCounter].classList.remove('active');
    elCounter++;
    element[elCounter].classList.add('active');
    elementCarousel[elCounter].classList.add('active');
  }
}

function prevPhoto() {
  if(elCounter <= 0){
    elCounter = imgList.length - 1;
    element[0].classList.remove('active');
    element[imgList.length - 1].classList.add('active');
    elementCarousel[0].classList.remove('active');
    elementCarousel[imgList.length - 1].classList.add('active');
  }else{
    element[elCounter].classList.remove('active');
    elementCarousel[elCounter].classList.remove('active');
    elCounter--;
    element[elCounter].classList.add('active');
    elementCarousel[elCounter].classList.add('active');
  }
}

function stopOver(){
  clearInterval(autoPlay)
}