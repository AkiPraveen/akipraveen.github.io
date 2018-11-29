window.sr = ScrollReveal();
var headerReveal = {
  delay: 200,
  distance: "90px",
  vFactor: 0.6
};
sr.reveal(".animated", headerReveal);
$(".myNav").tooltip();

$(document).ready(function() {
  var animTime = 300,
    clickPolice = false;

  $(document).on("touchstart click", ".acc-btn", function() {
    if (!clickPolice) {
      clickPolice = true;

      var currIndex = $(this).index(".acc-btn"),
        targetHeight = $(".acc-content-inner")
          .eq(currIndex)
          .outerHeight();

      $(".acc-btn h1").removeClass("selected");
      $(this)
        .find("h1")
        .addClass("selected");

      $(".acc-content")
        .stop()
        .animate({ height: 0 }, animTime);
      $(".acc-content")
        .eq(currIndex)
        .stop()
        .animate({ height: targetHeight }, animTime);

      setTimeout(function() {
        clickPolice = false;
      }, animTime);
    }
  });
});

// links for header
$("#bitcamp").on("click", function() {
  window.location.href = "https://bit.camp/";
});

$("#hpe").on("click", function() {
  window.location.href = "https://www.hpe.com";
});

$("#shell").on("click", function() {
  window.location.href = "https://startupshell.org/";
});

// links for experience section
$("#chemstress").on("click", function() {
  window.location.href = "projects/chemstress.html";
});

$("#hackathons").on("click", function() {
  window.location.href = "projects/hackathons.html";
});

$("#tinovation").on("click", function() {
  console.log("tinovation clicked");
  window.location.href = "projects/tinovation.html";
});

$("#lhd2016").on("click", function() {
  window.location.href = "projects/tinolhd2016.html";
});
