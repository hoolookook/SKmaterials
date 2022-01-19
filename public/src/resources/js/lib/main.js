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
  $("ul li").mouseenter(function () {
    $("#header").css({
      "background-color": "white",
    });
    $(".logo img").attr(
      "src",
      "/public/src/resources/images/header-ci-black.png"
    );
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
      "/public/src/resources/images/header-ci-white.png"
    );
    $(".navWrap .nav a").css({
      color: "white",
    });
  });
  $(".mtFam, .mtLife").mouseenter(function () {
    $(".deepMenuOn").css({
      height: "100px",
      transition: "height 0.35s ease",
    });
  });
  $(".mtFam, .mtLife").mouseleave(function () {
    $(".deepMenuOn").css({
      height: "0px",
      transition: "height 0.35s ease",
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
