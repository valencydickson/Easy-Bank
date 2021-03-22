$(document).ready(function () {
  const toggler = $(".toggler");
  const close = $(".toggler-close");
  const navbar = $(".navbar");

  toggler.click(function () {
    navbar.toggleClass("show-navbar");
    toggler.css("display", "none");
    close.css("display", "block");
  });

  close.click(function () {
    navbar.toggleClass("show-navbar");
    close.css("display", "none");
    toggler.css("display", "block");
  });
});
