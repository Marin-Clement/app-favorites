let redirect_Home = () => {
    var body = document.getElementById("body");
    var header = document.getElementById("header");
    body.classList.add("fadeout");
    header.classList.add("scaleout");
    let tID = setTimeout(function () {
        window.location.href = "fav-app.html";
        window.clearTimeout(tID);
    }, 1000);
}

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    var loading = document.getElementById("loading_bar_fill");
    var image = document.getElementById("back-image");
    var playlist_container1 = document.getElementById("playlist-container1");
    var playlist_container2 = document.getElementById("playlist-container2");
    var scroll = document.getElementById("scroll-down");
    console.log(loading);
    loading.style.width = value * 0.08 + '%';
    image.style.opacity = 1 + value * -0.003;
    image.style.paddingBottom = 0 + value * 0.02 + '%';
    playlist_container1.style.left = 200 - value * 0.15 + '%';
    playlist_container2.style.right = 200 - value * 0.15 + '%';
    scroll.style.opacity = 1 + value * -0.0035;
    scroll.style.paddingTop = 0 + value * 0.013 + '%';
})
window.addEventListener('scroll',function reveal(){
    var reveals = document.querySelectorAll('.reveal');

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