// mobile menu START
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let manuOpened = document.querySelector('.manuOpened');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    manuOpened.classList.toggle('active');
})

let links = document.querySelectorAll('.mob__hov');


links.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        manuOpened.classList.toggle('active');
    })
});


// mobile menu END
document.querySelectorAll('.title').forEach(item => {
    console.log(item);
})



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





// add class col-bg
let colRigh = document.getElementById("col__right")

function nalevo() {
    if (window.outerWidth < 780) {
        colRigh.classList("col__bg");
        console.log(1);
    } else {
        console.log(2);
    };
}

nalevo()


// swiper col Start

let colLeft = document.querySelector(".col-bg");
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
    else {
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

    if (col > 20) {
        newNum = col - 1
        console.log(newNum);
        colText.innerHTML = newNum;
    } else {
        colText.innerHTML = '20';
    }


    return col = newNum;
}

price();

setInterval(price, 30000);

// coll


// form btn
let formClos = document.querySelector('.form__btn');
let formContainer = document.querySelector('.form__container')

let card1 = document.querySelector('.card1__btn')

card1.addEventListener('click', function () {
    // formContainer.style.display = 'block'
    // formContainer.style.transform = 'scale(1)';
    formContainer.classList.add('active');
})

formClos.addEventListener('click', function () {
    //    formContainer.style.display = 'none'
    formContainer.classList.remove('active');
})

// form

// form end

// scrool midle
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }
// scrool midleEND

// window.onload

window.onload = function () {
    let preloader = document.getElementById('loader-wrapper');
    // preloader.classList.add('visible');
    preloader.classList.add('hidden'), 400

}