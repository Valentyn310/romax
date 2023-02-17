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

// swiper col Start
let colLeft = document.querySelector(".col-bg");
let colRight = document.querySelector(".col__right");
let slideActiv = document.querySelector(".swiper-slide-active");

let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");
let slide5 = document.querySelector(".slide5");
let slide6 = document.querySelector(".slide6");

// function sas() {
//     if (window.innerWidth <= 768) {
//         function colBg() {
//             if (slide1.classList.contains("swiper-slide-active")) {
//                 colRight.style.backgroundImage = "url('/img/colection/col1.png')";
//             }
//             else if (slide2.classList.contains("swiper-slide-active")) {
//                 colRight.style.backgroundImage = "url('/img/colection/col2.png')";
//             }
//             else if (slide3.classList.contains("swiper-slide-active")) {
//                 colRight.style.backgroundImage = "url('/img/colection/col3.png')";
//             }
//             else if (slide4.classList.contains("swiper-slide-active")) {
//                 colRight.style.backgroundImage ="url('/img/colection/col4.png')";
//             }
//             else if (slide5.classList.contains("swiper-slide-active")) {
//                 colRight.style.backgroundImage ="url('/img/colection/col5.png')";
//             }
//             else if (slide6.classList.contains("swiper-slide-active")) {
//                 colRight.style.backgroundImage ="url('/img/colection/col6.png')";
//             }
//             else {
//                 colRight.style.backgroundImage = "url('/img/colection/col1.png')";
//             }
//         };
//         setInterval(colBg, 100)

//     } else {
//         function colBg1() {
//             if (slide1.classList.contains("swiper-slide-active")) {
//                 colLeft.style.backgroundImage = "url('/img/colection/col1.png')";
//             }
//             else if (slide2.classList.contains("swiper-slide-active")) {
//                 colLeft.style.backgroundImage = "url('/img/colection/col2.png')";
//             }
//             else if (slide3.classList.contains("swiper-slide-active")) {
//                 colLeft.style.backgroundImage = "url('/img/colection/col3.png')";
//             }
//             else if (slide4.classList.contains("swiper-slide-active")) {
//                 colLeft.style.backgroundImage = "url('/img/colection/col4.png')";
//             }
//             else if (slide5.classList.contains("swiper-slide-active")) {
//                 colLeft.style.backgroundImage = "url('/img/colection/col5.png')";
//             }
//             else if (slide6.classList.contains("swiper-slide-active")) {
//                 colLeft.style.backgroundImage = "url('/img/colection/col6.png')";
//             }
//             else {
//                 colLeft.style.backgroundImage = "url('/img/colection/col1.png')";
//             }
//         };

//         setInterval(colBg1, 100)
//     }
// };
// sas();

function colBg1() {
    if (slide1.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col1.png')";
    }
    else if (slide2.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col2.png')";
    }
    else if (slide3.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col3.png')";
    }
    else if (slide4.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col4.png')";
    }
    else if (slide5.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col5.png')";
    }
    else if (slide6.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col6.png')";
    }
    else {
        colLeft.style.backgroundImage = "url('/img/colection/col1.png')";
    }
};

setInterval(colBg1, 100)


// swiper col Start

// price
let colText = document.querySelector('.col');
let col = 50;
let num = Number(col);

function price() {

    if (col > 20) {
        newNum = col - 1
        colText.innerHTML = newNum;
    } else {
        colText.innerHTML = '20';
    }
    return col = newNum;
}

price();

setInterval(price, 30000);
// price




// lang start


// const select = document.querySelector('select');
// const allLang = ['ru', 'ua'];//кол языков

// // слушатель собитий
// select.addEventListener('change', changeURLLanguage);

// // перенаправить на url с указанием языка
// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }

// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     // если в ссылке пропала одна буква, делает стартовую страницу ua
//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#ua';
//         location.reload();// перезагрузить
//     }
//     select.value = hash;
//     // document.querySelector('title').innerHTML = langArr['unit'][hash];

//     // функция смены языка
//     for (let key in langArr) {
//         // проверяем есть ли елемент, чтобы избежать ошибку
//         let elem = document.querySelector('.lng-' + key);
//         if (elem) {
//             elem.innerHTML = langArr[key][hash];
//         }

//     }
// }

// changeLanguage();

// lang Eng





// form btn
let formClos = document.querySelector('.form__btn');
let formContainer = document.querySelector('.form__container')

let card1 = document.querySelector('.card1__btn')

card1.addEventListener('click', function () {
    formContainer.classList.add('active');
})

formClos.addEventListener('click', function () {
    formContainer.classList.remove('active');
})







// preloader
window.onload = function () {
    let preloader = document.getElementById('loader-wrapper');
    // preloader.classList.add('visible');
    preloader.classList.add('hidden'), 400

}



// swiper
// swiper colection
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    spaceBetween: 40,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});


var swiper1 = new Swiper(".mySwiper1", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    mousewheel: true,
    keyboard: true,

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        10: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        660: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 768px
        980: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }

});



// swiper END