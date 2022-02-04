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

  // video progress bar
  // color 채우기
  var vid = document.getElementById("video");
  vid.ontimeupdate = function () {
    var percentage = (vid.currentTime / vid.duration) * 100;
    $("#custom-seekbar span").css("width", percentage + "%");
  };
  // 숫자 채우기
  // var vid = document.getElementById("video");
  // vid.ontimeupdate = function () {
  //   myfunction();
  // };
  // function myfunction() {
  //   document.getElementById("custom-seekbar").innerHTML = vid.currentTime;
  // }
});
// 그 외
$(document).ready(function () {
  var child = ".slick-dots li:nth-child(n)";

  var progressBar = '<div class="progressBar"><div class="line"></div></div>';
  function ClickAddPr(e) {
    $(document).on("click", e, function () {
      $(this).append(progressBar).not(this).removeClass("slick-active");
      $(this).toggleClass("slick-active");

      // $(e).not(".slick-active").css("background", "red");
      // $(e).not(".slick-active").not("button").empty();
    });
  }

  ClickAddPr(child);

  //
  // ClickAddPr(child);
  // if ($(child).hasClass("slick-active")) {
  //   ClickAddPr(child);
  //   click = true;
  // } else {
  //   click = false;
  // }

  $(".slick-active ").append(progressBar);
});
