const HEADER_NAV = document.getElementById('header-nav');

HEADER_NAV.addEventListener('click', (event) => {
    HEADER_NAV.querySelectorAll('a').forEach(el => el.classList.remove('header-active'));
    event.target.classList.add('header-active');
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
})