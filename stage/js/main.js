$(function () {
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
  });
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  });
  $(".toggle-setting").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  });

  var themesClasses = [];
  $(".colors-options li").on("click", function () {
    themesClasses.push($(this).data("theme"));
  });
  $(".colors-options li").on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');
    $("body")
      .removeClass(themesClasses.join(" "))
      .addClass($(this).data("theme"));
  });

  var fontClasses = [];
  $(".font-options select option").each(function () {
   fontClasses.push($(this).val());
  });
  $(".font-options select").on("change", function () {
    $("body")
      .removeClass(fontClasses.join(" "))
      .addClass($(this).find("option:selected").val());
  });
});

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
