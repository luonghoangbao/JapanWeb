$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (e) {
    var data_id = $(this).attr('href'); // trả ra id mà bạn click. ví dụ Go to Section 2 với href="#two" thì với đoạn này ta sẽ nhận dc #two
    $('html, body').animate({
      scrollTop: $(data_id).offset().top
    }, '500000');
  });

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}