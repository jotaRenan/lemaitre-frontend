const addToggleMenuEvent = (DOMObject) => {
  DOMObject.addEventListener('click', function() {
    document.querySelector("body").classList.toggle("with--sidebar");
  });
};

window.onload = function() {
    addToggleMenuEvent(document.querySelector("#header__icon"));

    document.querySelector("#site-cache").addEventListener('click', function() {
      document.querySelector("body").classList.remove("with--sidebar");
    });

    document.querySelectorAll('nav.menu a').forEach(addToggleMenuEvent);
};
