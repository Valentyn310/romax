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

let NumCaps = document.getElementById('NumCaps');
let FormImg = document.getElementById('FormImg');

function colBg1() {
    if (slide1.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col1.png')";
        NumCaps.value = ("CAPS 1️⃣");
        FormImg.src = ("./img/form/form1.png");
    }
    else if (slide2.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col2.png')";
        NumCaps.value = ("CAPS2️⃣");
        FormImg.src = ("./img/form/form2.png");
    }
    else if (slide3.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col3.png')";
        NumCaps.value = ("CAPS3️⃣");
        FormImg.src = ("./img/form/form3.png");
    }
    else if (slide4.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col4.png')";
        NumCaps.value = ("CAPS4️⃣");
        FormImg.src = ("./img/form/form4.png");
    }
    else if (slide5.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col5.png')";
        NumCaps.value = ("CAPS5️⃣");
        FormImg.src = ("./img/form/form5.png");
    }
    else if (slide6.classList.contains("swiper-slide-active")) {
        colLeft.style.backgroundImage = "url('/img/colection/col6.png')";
        NumCaps.value = ("CAPS2️⃣");
        FormImg.src = ("./img/form/form6.png");
    }
    else {
        colLeft.style.backgroundImage = "url('/img/colection/col1.png')";
        NumCaps.value = ("CAPS1️⃣");
        FormImg.src = ("./img/form/form1.png");
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
let formContainer = document.querySelector('.form__container');

let card1 = document.querySelector('.card1__btn');
let card2 = document.querySelector('.card2__btn');
let card3 = document.querySelector('.card3__btn');
let card4 = document.querySelector('.card4__btn');
let card5 = document.querySelector('.card5__btn');
let card6 = document.querySelector('.card6__btn');

card1.addEventListener('click', function () {
    formContainer.classList.add("active");
});

card2.addEventListener('click', function () {
    formContainer.classList.add("active");
});

card3.addEventListener('click', function () {
    formContainer.classList.add("active");
});

card4.addEventListener('click', function () {
    formContainer.classList.add("active");
});

card5.addEventListener('click', function () {
    formContainer.classList.add("active");
});

card6.addEventListener('click', function () {
    formContainer.classList.add("active");
});

formClos.addEventListener('click', function () {
    formContainer.classList.remove('active');
})



// formClos.addEventListener()


// let formContainer1 = document.querySelector('.form__container1');
// let formContainer2 = document.querySelector('.form__container2');
// let formContainer3 = document.querySelector('.form__container3');
// let formContainer4 = document.querySelector('.form__container4');
// let formContainer5 = document.querySelector('.form__container5');
// let formContainer6 = document.querySelector('.form__container6');

// card1.addEventListener('click', function () {
//     formContainer1.classList.add('active');
// });

// card2.addEventListener('click', function () {
//     formContainer2.classList.add('active');
// });

// card3.addEventListener('click', function () {
//     formContainer3.classList.add('active');
// });

// card4.addEventListener('click', function () {
//     formContainer4.classList.add('active');
// });

// card5.addEventListener('click', function () {
//     formContainer5.classList.add('active');
// });

// card6.addEventListener('click', function () {
//     formContainer6.classList.add('active');
// });


// formClos.addEventListener('click', function () {
//     formContainer1.classList.remove('active');
//     formContainer2.classList.remove('active');
//     formContainer3.classList.remove('active');
//     formContainer4.classList.remove('active');
//     formContainer5.classList.remove('active');
//     formContainer6.classList.remove('active');
// })







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



// new form axios
const TOKEN = "5831080414:AAEDl9iIHfULw0NGzMvXI9v9raKT7ei32yo";
const CHAT_ID = "-785786427";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');
const successBack = document.getElementById('successBack');



// слушатель
document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault();//сбрасываем стандартное поведение

    // если поля не заполнены то красный, если нет то идет отправка сообщений
    if (this.name.value === "" || this.phone.value === "" || this.quantity.value === "" || this.size.value === "") {
        success.style.display = "block"
        success.innerHTML = "Заполните поля для отправки!"
        success.style.backgroundColor = "red"

        setTimeout(function() {
            success.innerHTML = "";
            success.style.backgroundColor = "#0F0F0F";
            success.style.display = "none"
        }, 5000);
    } else {
        let message = `Заявка о покупке\n`;
        message += `Товар: ${this.theme.value} \n`;
        message += `Имя: ${this.name.value} \n`;
        message += `Телефон: ${this.phone.value} \n`;
        message += `Количество: ${this.quantity.value} \n`;
        message += `Размер: ${this.size.value} \n`;
        message += `Коментарий: ${this.coment.value} \n`;

        // сама отправка текста через метод axios
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parser_mode: 'html', //какой тип текста будем передавать, их два
            text: message
        })

            // стираем сообщение после отправки
            .then((res) => {
                this.name.value = "";
                this.phone.value = "";
                this.quantity.value = "";
                this.size.value = "";
                this.coment.value = "";

                success.style.display = "block"
                success.innerHTML = "Сообщение отправлено!"
                success.style.backgroundColor = "green"

                setTimeout(function() {
                    success.innerHTML = "";
                    success.style.backgroundColor = "#0F0F0F";
                    success.style.display = "none"
                    
                }, 5000);
            })

            // eror
            .catch((err) => {
                console.warn(err);
            })
            // действия после отправки
            .finally(() => {
                // console.log('конец')

               
            })
    }


});

// back__call
document.getElementById("tg-back").addEventListener("submit", function (e) {
    e.preventDefault();//сбрасываем стандартное поведение

    // если поля не заполнены то красный, если нет то идет отправка сообщений
    if (this.name1.value === "" || this.phone1.value === "") {
        successBack.innerHTML = "Заполните поля для отправки!"
        successBack.style.backgroundColor = "red"

        setTimeout(function() {
            successBack.innerHTML = "";
            successBack.style.backgroundColor = "black";
            
        }, 5000);
    } else {
        let message = `Обратная Связь ♻️\n`;
        message += `Имя: ${this.name1.value} \n`;
        message += `Телефон: ${this.phone1.value} \n`;
        message += `Коментарий: ${this.coment1.value} \n`;

        // сама отправка текста через метод axios
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parser_mode: 'html', //какой тип текста будем передавать, их два
            text: message
        })

            // стираем сообщение после отправки
            .then((res) => {
                this.name1.value = "";
                this.phone1.value = "";
                this.coment1.value = "";

                successBack.innerHTML = "Сообщение отправлено!"
                successBack.style.backgroundColor = "green"

                setTimeout(function() {
                    successBack.innerHTML = "";
                    successBack.style.backgroundColor = "black";
                    
                }, 5000);
            })

            // eror
            .catch((err) => {
                console.warn(err);
            })
            // действия после отправки
            .finally(() => {
                console.log('конец')
            })
    }


})




// qvery form mask
$(function () {
    $('input[type="tel"]').mask('+38(000)000-00-00');
});


// go-top
// считываем кнопку
const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("go-top--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("go-top--show");
  }
}

// function goTop() {
//   // пока не вернулись в начало страницы
//   if (window.pageYOffset > 0) {
//     // скроллим наверх
//     // window.scrollBy(0, -75); // второй аргумент - скорость
//     setTimeout(goTop, 0); // входим в рекурсию
//   }
// }