// nav메뉴 hover
$(document).ready(function () {
  var hovering = false;
  function hoverFun(hovering) {
    if (hovering) {
      $("#header").css({
        "background-color": "white",
      });

      $(".logo img").attr(
        "src",
        "/public/src/resources/images/icons/header-ci-black.png"
      );
      $(".navWrap .nav .login").css({
        "background-image":
          "url(/public/src/resources/images/icons/nav-login-icon-black.png)",
      });
      $(".navWrap .nav a").css({
        color: "black",
      });
    } else {
      $("#header").removeClass("deepMenuOn").css({
        "background-color": "transparent",
      });
      $(".logo img").attr(
        "src",
        "/public/src/resources/images/icons/header-ci-white.png"
      );
      $(".navWrap .nav .login").css({
        "background-image":
          "url(/public/src/resources/images/icons/nav-login-icon-white.png)",
      });
      $(".navWrap .nav a").css({
        color: "white",
      });
    }
  }
  // ---------------mouse enter---------------------
  $("ul li").mouseenter(function () {
    hoverFun(true);
  });
  $(".mtFam, .mtLife").mouseenter(function () {
    $(".deepMenuOn").css({
      height: "100px",
      transition: "height 0.35s ease",
      "border-top": "1px solid #d9d9d9",
    });
  });

  // ---------------mouse leave---------------------
  $("#header").mouseleave(function () {
    hoverFun(false);
  });
  $(".mtFam, .mtLife").mouseleave(function () {
    $(".deepMenuOn").css({
      height: "0px",
      transition: "height 0.35s ease",
      "border-top": 0,
    });
  });

  // ---------------scroll event---------------------
  $(window).scroll(function () {
    // console.log("현재 스크롤위치는" + $(window).scrollTop());

    var fixedBar = $("#fixed");
    var headerBar = $("#header");
    var scrollBool = $(this).scrollTop() > 0 ? true : false;

    if (scrollBool > 0) {
      fixedBar.fadeIn(200);
      hoverFun(true);
    } else {
      fixedBar.hide();
      hoverFun(false);
    }

    // click event
    function clickUpIcon() {
      $("#upicon").click(function () {
        $("html, body")
          .filter(":not(:animated)")
          .animate({ scrollTop: 0 }, 400);
        return false;
      });
    }

    clickUpIcon();
  });
});
// slick & video option
$(document).ready(function () {
  var play = $("#playPause .play");
  var pause = $("#playPause .pause");
  var $slider = $(".videoSection").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrow: false,
    autoplay: true,
    autoplaySpeed: 15000,
  });

  $(".play").on("click", function () {
    $(pause).css("opacity", "0.2");
    $(this).css("opacity", "1");
    $(".videoSection").slick("slickPlay");
    // $(this).css({ opacity: 1 });
  });
  $(".pause").on("click", function () {
    $(play).css("opacity", "0.2");
    $(this).css("opacity", "1");
    $(".videoSection").slick("slickPause");
    // $(this).css({ opacity: 1 });
  });
});
// 그 외
$(document).ready(function () {
  var chkClick = false;
  var progressBar = '<div class="progressBar"><div class="line"></div></div>';
  var a = $(".slick-dots li:nth-child(1)");
  var b = $(".slick-dots li:nth-child(2)");
  var c = $(".slick-dots li:nth-child(3)");

  // init
  $(".slick-dots li").append(progressBar);
  $(".slick-dots li:nth-child(1) .progressBar").css({ display: "block" });
  $(".slick-dots li:nth-child(2) .progressBar").css({ display: "none" });
  $(".slick-dots li:nth-child(3) .progressBar").css({ display: "none" });
  // if
  if (!chkClick) {
    clickEvt();
  } else {
    return false;
  }

  function clickEvt() {
    $(a).on("click", function () {
      $(".slick-dots li:nth-child(1) .progressBar").css({ display: "block" });
      $(".slick-dots li:nth-child(2) .progressBar").css({ display: "none" });
      $(".slick-dots li:nth-child(3) .progressBar").css({ display: "none" });
    });
    $(b).on("click", function () {
      $(".slick-dots li:nth-child(1) .progressBar").css({ display: "none" });
      $(".slick-dots li:nth-child(2) .progressBar").css({ display: "block" });
      $(".slick-dots li:nth-child(3) .progressBar").css({ display: "none" });
    });
    $(c).on("click", function () {
      $(".slick-dots li:nth-child(1) .progressBar").css({ display: "none" });
      $(".slick-dots li:nth-child(2) .progressBar").css({ display: "none" });
      $(".slick-dots li:nth-child(3) .progressBar").css({ display: "block" });
    });
  }
});
