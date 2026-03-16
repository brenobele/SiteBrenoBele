(function () {
  var burger = document.querySelector(".burger");
  var navbar = document.querySelector(".navbar");

  if (burger) {
    var menu = document.querySelector("#" + burger.dataset.target);
    var navLinks = menu ? menu.querySelectorAll(".navbar-item") : [];

    burger.addEventListener("click", function () {
      var isActive = burger.classList.toggle("is-active");
      if (menu) {
        menu.classList.toggle("is-active");
      }
      burger.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        burger.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
        if (menu) {
          menu.classList.remove("is-active");
        }
      });
    });
  }

  function syncNavbarState() {
    if (!navbar) {
      return;
    }

    if (window.scrollY > 16) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }

  syncNavbarState();
  window.addEventListener("scroll", syncNavbarState, { passive: true });
})();
