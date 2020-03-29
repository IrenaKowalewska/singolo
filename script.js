
const MENU = document.getElementById('header-nav');


MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('.header-item').forEach(element => element.classList.remove('header-active')); 

  if(~event.target.className.indexOf('header-item', 0)) 
	event.target.classList.add('header-active');  
});

const LINK_MENU = document.getElementById('home'); 
const LINK_SERVICES =  document.getElementById('services');
const LINK_PORTFOLIO = document.getElementById('portfolio');
const LINK_ABOUT = document.getElementById('about');
const LINK_CONTACT = document.getElementById('contact');


LINK_MENU.addEventListener('click', (event) => {
	window.scrollTo(0,0);
});

LINK_SERVICES.addEventListener('click', (event) => {
	window.scrollTo(0, 650);
});

LINK_PORTFOLIO.addEventListener('click', (event) => {
	window.scrollTo(0, 1170);
});

LINK_ABOUT.addEventListener('click', (event) => {
	window.scrollTo(0, 2000);
});

LINK_CONTACT.addEventListener('click', (event) => {
	window.scrollTo(0, 2733);
});

window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset; 
 
  MENU.querySelectorAll('a').forEach(element => element.classList.remove('header-active')); 
  
  if (scroll < 600) { 
   LINK_MENU.classList.add('header-active');    
  }
  else if (scroll >= 650 && scroll < 1170) {
   LINK_SERVICES.classList.add('header-active');
  }
  else if (scroll >= 1170 && scroll < 2000) {
   LINK_PORTFOLIO.classList.add('header-active');
  }
  else if (scroll >= 2000 && scroll < 2733) {
   LINK_ABOUT.classList.add('header-active');
  }
  else if (scroll >= 2733) {
   LINK_CONTACT.classList.add('header-active');
  }
});

const PORTFOLIO = document.getElementById('portfolio-images');
const PORTFOLIO_TAGS = document.getElementById('portfolio-tags');

PORTFOLIO_TAGS.addEventListener('click', event => {
    if(event.target.classList.contains('tag')){
        PORTFOLIO_TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('tag-selected'));
        event.target.classList.add('tag-selected');
      
      for(i = 0; i < PORTFOLIO.children.length; i++){
        PORTFOLIO.children[i].style.order="0";
      }
      if(event.target.id == 'Web-Design'){
        for(let i = 0; i < 12; i+=4){
          PORTFOLIO.children[i].style.order="1";
        }
      }
      if(event.target.id == 'All') PORTFOLIO.style.flexDirection = 'row';
      if(event.target.id == 'Graphic-Design'){
        for(let i = 1; i < 12; i+=2){
          PORTFOLIO.children[i].style.order="2";
        }
      }
      if(event.target.id == 'Artwork'){
        for(i = 0; i < 12; i+=2){
          PORTFOLIO.children[i].style.order='3';
        }
      }
    }
  })

PORTFOLIO.addEventListener('click', event => {
  let target = event.target;
  if (target.tagName == 'IMG') {
      PORTFOLIO.querySelectorAll('img').forEach(item => {
          item.style.boxShadow = "none";
      });
      event.target.style.boxShadow = "0px 0px 0px 5px #F06C64";
  }
});

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;



function hideSlide(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function () {
      this.classList.remove('active-slide', direction);
    })
}

function showSlide(direction) {
    slides[currentSlide].classList.add('next-slide', direction);
    document.querySelector('.carousel').style.backgroundColor = document.querySelector('.next-slide').dataset.bgcolor
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('next-slide', direction);
        this.classList.add('active-slide');
        isEnabled = true;
    })
}


function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
}

function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
}

function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
}

document.querySelector(".arrow-back").addEventListener('click', function () {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
})

document.querySelector(".arrow-next").addEventListener('click', function () {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
});



const FORM = document.getElementById("form");
const BUTTON = document.getElementById('contact-btn'); 
const MESSAGE_BLOCK = document.getElementById('message-block'); 
const BUTTON_OK = document.getElementById('close-contact-btn');  


FORM.addEventListener('submit', function(){
  
  event.preventDefault();
  document.getElementById('message-block').classList.remove('hidden'); 
  document.getElementById('message-block-bg').classList.remove('hidden'); 
  
  const SUBJECT = document.getElementById('subject').value.toString(); 
  const DESCRIBE = document.getElementById('textarea').value.toString(); 
  
  if (SUBJECT)
  document.getElementById('subj-text').innerText = `Тема: ${SUBJECT}`; 
  else 
  document.getElementById('subj-text').innerText = 'Без темы';
   
  if (DESCRIBE)
  document.getElementById('proj-text').innerText = `Описание: ${DESCRIBE}`;
  else
  document.getElementById('proj-text').innerText = 'Без описания';
  
});
BUTTON_OK.addEventListener('click',(event => {
  document.getElementById('subj-text').innerText = "";
  document.getElementById('proj-text').innerText = "";
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('message-block-bg').classList.add('hidden');
  FORM.reset();
}));

