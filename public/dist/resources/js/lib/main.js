// $(document).ready(function () {
//   $("ul li a").hover(
//     function () {
//       $("#header").css("background-color", "blue");
//     },
//     function () {
//       $("#header").css("background-color", "red");
//     }
//   );
// });

// nav메뉴 hover
$(document).ready(function () {
  var hovering = false;
  var webRoot = "./";
  $("ul li").mouseenter(function () {
    $("#header").css({
      "background-color": "white",
    });

    $(".logo img").attr(
      "src",
      webRoot + "/resources/images/icons/header-ci-black.png"
    );
    $(".navWrap .nav .login").css({
      "background-image":
        webRoot + "url(/resources/images/icons/nav-login-icon-black.png)",
    });
    $(".navWrap .nav a").css({
      color: "black",
    });
  });
  $("#header").mouseleave(function () {
    $("#header").removeClass("deepMenuOn").css({
      "background-color": "transparent",
    });
    $(".logo img").attr(
      "src",
      webRoot + "/resources/images/icons/header-ci-white.png"
    );
    $(".navWrap .nav .login").css({
      "background-image":
        webRoot + "url(/resources/images/icons/nav-login-icon-white.png)",
    });
    $(".navWrap .nav a").css({
      color: "white",
    });
  });
  $(".mtFam, .mtLife").mouseenter(function () {
    $(".deepMenuOn").css({
      height: "100px",
      transition: "height 0.35s ease",
      "border-top": "1px solid #d9d9d9",
    });
  });
  $(".mtFam, .mtLife").mouseleave(function () {
    $(".deepMenuOn").css({
      height: "0px",
      transition: "height 0.35s ease",
      "border-top": 0,
    });
  });
});

// slick option
$(document).ready(function () {
  $(".videoSection").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});

// 키누를때 value 지우기
// $("input").on("keyup", function () {
//   var valueDefault = "직무를 입력해주세요.";
//   if (this.value.length == 0) {
//     $("input").val(valueDefault);
//   }
// });

$footer = $("#footer");
$win = $(window);
var ipos = $footer.offset().top;
var wpos, space, width;
width = $footer.width();

function h(e) {
  wpos = $win.scrollTop();
  space = $win.height() - $footer.height();
  if (wpos + space > ipos) {
    $footer.addClass("fixed");
    $footer.width(width);
  } else {
    $footer.removeClass("fixed");
  }
}

$(window).scroll(h);
