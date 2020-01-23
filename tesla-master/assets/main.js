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

/* Tabs */

// Show the first tab by default
$(".tabs-stage div").hide();
$(".tabs-stage div:first").show();
$(".tabs-nav li:first").addClass("tab-active");

// Change tab class and display content
$(".tabs-nav a").on("click", function(event) {
  event.preventDefault();
  $(".tabs-nav li").removeClass("tab-active");
  $(this)
    .parent()
    .addClass("tab-active");
  $(".tabs-stage div").hide();
  $($(this).attr("href")).show();
});

/* Slick testamonials */

$(".single-item").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  cssEase: "ease-in-out"
});

$(".quote-container").mousedown(function() {
  $(".single-item").addClass("dragging");
});
$(".quote-container").mouseup(function() {
  $(".single-item").removeClass("dragging");
});
