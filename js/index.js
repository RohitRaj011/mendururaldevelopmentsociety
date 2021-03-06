function scrolling() {
  window.addEventListener("scroll", function () {
    var navbar = document.getElementsByClassName("container-fluid")[0];
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
}

$(document).ready(function () {
  var x = window.matchMedia("(min-width: 1200px)");
  if (x.matches) scrolling();

  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);

  if (page_id == "programme") {
    $("html, body").animate(
      {
        scrollTop: $("#scroll-" + page_id).offset().top - 180,
      },
      800
    );
  } else if (page_id == "about") {
    $("html, body").animate(
      {
        scrollTop: $("#scroll-" + page_id).offset().top,
      },
      800
    );
  } else if (page_id == "contact") {
    $("html, body").animate(
      {
        scrollTop: $("#scroll-" + page_id).offset().top - 180,
      },
      800
    );
  } else if (page_id == "donate") {
    $("html, body").animate(
      {
        scrollTop: $("#scroll-" + page_id).offset().top - 300,
      },
      800
    );
  }

  $("#image-carousel").slick({
    adaptiveHeight: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  });

  $("#video-carousel").slick({
    adaptiveHeight: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    arrows: false,
  });

  $("#video-carousel").on("beforeChange", function () {
    $(".videos").trigger("pause");
  });
  $("#video-carousel").on("afterChange", function () {
    $(".slick-active .videos").trigger("play");
  });
});
