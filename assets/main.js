$(function() {
  $(".toggle").click(function() {
    $(this).toggleClass("on");
    $(".mobile").toggleClass("active");
  });
});

/* Slider */

$(".teslaSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true
});

/* smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
