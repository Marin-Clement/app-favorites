function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let redirect_Home = () => {
  var html = document.getElementById("html");
  var body = document.getElementById("body");
  var header = document.getElementById("header");
  var main = document.querySelector('main');
  var down_arrow = document.getElementById('scroll-down')
  body.classList.add("fadeout");
  header.classList.add("scaleout");
  down_arrow.classList.add("blurout");
  html.classList.add("blackout");
  main.classList.add("fadeout");
  let tID = setTimeout(function () {
      window.location.href = "fav-app.html";
      window.clearTimeout(tID);
  }, 1200);
}
window.addEventListener("load", () => {
  var tweets = document.getElementsByClassName('pp');

  for(var i = 0; i < tweets.length; i++){
      tweets[i].style.marginLeft = getRandomInt(-60,60) + '%';
  }
});

window.addEventListener('scroll',function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  
  let value = window.scrollY;
  var scroll = document.getElementById("scroll-down");

  scroll.style.opacity = 1 + value * -0.01;
  scroll.style.paddingTop = 0 + value * 0.013 + '%';

  for(var i = 0; i < reveals.length; i++){

  var windowheight = window.innerHeight;
  var revealtop = reveals[i].getBoundingClientRect().top;
  var revealpoint = 150;

  if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
  }
  else{
      reveals[i].classList.remove('active');
  }
  }
})

function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}