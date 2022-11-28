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
window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.0 + 'px';
    moon.style.left = value * -1.5 + 'px';
    forest.style.marginTop = value * 0.7 + 'px';
    text.style.marginRight = value * 3 + 'px';
    btn.style.marginTop = value * 2.1 + 'px';
})

let redirect_Spotify = () => {
    var body = document.getElementById("body");
    var spotify = document.getElementById("spotify-content");
    var youtube = document.getElementById("youtube-content");
    var twitter = document.getElementById("twitter-content");
    body.classList.add("fadeout");
    spotify.classList.add("scaleout");
    youtube.classList.add("blurout");
    twitter.classList.add("blurout");
    let tID = setTimeout(function () {
        window.location.href = "spotify.html";
        window.clearTimeout(tID);
    }, 1000);
}
let redirect_Youtube = () => {
    var body = document.getElementById("body");
    var youtube = document.getElementById("youtube-content");
    var twitter = document.getElementById("twitter-content");
    var spotify = document.getElementById("spotify-content");
    body.classList.add("fadeout");
    youtube.classList.add("scaleout");
    spotify.classList.add("blurout");
    twitter.classList.add("blurout");
    let tID = setTimeout(function () {
        window.location.href = "youtube.html";
        window.clearTimeout(tID);
    }, 1000);
}
let redirect_Twitter = () => {
    var body = document.getElementById("body");
    var spotify = document.getElementById("spotify-content");
    var twitter = document.getElementById("twitter-content");
    var youtube = document.getElementById("youtube-content");
    body.classList.add("fadeout");
    twitter.classList.add("scaleout");
    youtube.classList.add("blurout");
    spotify.classList.add("blurout");
    let tID = setTimeout(function () {
        window.location.href = "twitter.html";
        window.clearTimeout(tID);
    }, 1000);
}
let redirect_Home = () => {
    var body = document.getElementById("body");
    var header = document.getElementById("header");
    body.classList.add("fadeout");
    header.classList.add("scaleout");
    let tID = setTimeout(function () {
        window.location.href = "index.html";
        window.clearTimeout(tID);
    }, 1000);
}