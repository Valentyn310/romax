// (function ($) {
//   $(".contact-form").submit(function (event) {
//     event.preventDefault();

//     // Сообщения формы
//     let successSendText = "Сообщение успешно отправлено";
//     let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
//     let requiredFieldsText = "Заполните поля с именем и телефоном";

//     // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
//     let message = $(this).find(".contact-form__message");

//     let form = $("#" + $(this).attr("id"))[0];
//     let fd = new FormData(form);
//     $.ajax({
//       url: "./telegramform/php/send-message-to-telegram.php",
//       type: "POST",
//       data: fd,
//       processData: false,
//       contentType: false,
//       beforeSend: () => {
//         $(".preloader").addClass("preloader_active");
//       },
//       success: function success(res) {
//         $(".preloader").removeClass("preloader_active");

//         // Посмотреть на статус ответа, если ошибка
//         // console.log(res);
//         let respond = $.parseJSON(res);

//         if (respond === "SUCCESS") {
//           message.text(successSendText).css("color", "#21d4bb");
//           setTimeout(() => {
//             message.text("");
//           }, 4000);
//         } else if (respond === "NOTVALID") {
//           message.text(requiredFieldsText).css("color", "#d42121");
//           setTimeout(() => {
//             message.text("");
//           }, 3000);
//         } else {
//           message.text(errorSendText).css("color", "#d42121");
//           setTimeout(() => {
//             message.text("");
//           }, 4000);
//         }
//       }
//     });
//   });
// })(jQuery);




// // $('.btn').click(function(){
// //   $('.form-wrapper').addClass('open');
// // });

// // document.getElementsByClassName('mystyle')[0].style= "margin: 50px";
// // document.getElementsByClassName('mystyle')[0].style= "margin: 50px";

// //  $('.btn').click(function(){
// //   $('.form-wrapper').css('display','flex');
// //  });

// //  $('.btn1').click(function(){
// //   $('.form-wrapper').css('display','none');
// //   $('.form-wrapper').css('background','#000');

// //  });


// // ___________

// // qvery form mask
// $(function () {
//   $('input[type="tel"]').mask('+38(000)000-00-00');
// });

 