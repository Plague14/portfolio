$(document).ready(function () {
    var toggler = $(".toggle-switch");
    toggler.click(function () {
      $(this).toggleClass("active");
    });
  });