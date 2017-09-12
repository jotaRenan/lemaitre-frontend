/*
window.onload = function() {
    document.querySelector("#header__icon").click(function(e) {
      e.preventDefault();
      document.querySelector("body").classList.toggle("with--sidebar");
    });
    document.querySelector("#site-cache").addEventListener('click', function(e) {
      document.querySelector("body").classList.remove("with--sidebar");
    });
};
*/
$(document).ready(function() {
  (function($) {
    $("#header__icon").click(function(e) {
      e.preventDefault();
      $("body").toggleClass("with--sidebar");
    });

    $("#site-cache").click(function(e) {
      $("body").removeClass("with--sidebar");
    });
  })(jQuery);
});
