// mobile menu START
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let manuOpened = document.querySelector('.manuOpened');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    manuOpened.classList.toggle('active');
})

// mobile menu END





// hero
var block = document.getElementById('hero__bg');

const images = ["url('/img/hero/hero.png')", "url('/img/hero/hero1.png')", "url('/img/hero/hero2.png')"]


function sas() {
    setTimeout(() => {
        block.style.backgroundImage = "url('./img/hero/hero1.png')";
        console.log(block.style.backgroundImage);
    }, 5000);

    setTimeout(function changeBgImg() {
        block.style.backgroundImage = "url('./img/hero/hero2.png')";
        console.log(block.style.backgroundImage);
    }, 10000);

    setTimeout(function changeBgImg() {
        block.style.backgroundImage = "url('./img/hero/hero.png')";
        console.log(block.style.backgroundImage);
    }, 15000);

};

sas();

setInterval(sas, 15000);

// hero END


// swiper col Start

let colLeft = document.querySelector(".col__left");
let slideActiv = document.querySelector(".swiper-slide-active");

let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");

function colBg() {
    if (slide1.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col1.png')";

    }
    else if (slide2.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/hero/hero1.png')";
    }
    else if (slide3.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/hero/hero2.png')";
    }
    else if (slide4.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/hero/hero.png')";
    }
    else{
        colLeft.style.backgroundImage = "url('/img/colection/col1.png')"; 
    }

    
};

setInterval(colBg, 100)
// swiper col END

// col
let colText = document.querySelector('.col');
let col = 50;
let num = Number(col);

function price() {

    if (col > 20){
    newNum = col - 1
    console.log(newNum);
    colText.innerHTML = newNum;
    } else {
        colText.innerHTML = '20';
    }


    return col = newNum;
}

price();

setInterval(price,30000);




// revies

// Slick slider init

