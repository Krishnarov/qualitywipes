!(function () {
  var e = document.querySelectorAll(".hs-menu-wrapper.flyouts > ul > li"),
    t = document.querySelectorAll(
      ".hs-menu-wrapper.flyouts > ul > li > ul > li"
    );
  Array.prototype.forEach.call(e, function (e, t) {
    e.querySelector("a").addEventListener("focus", function (e) {
      var t = document.querySelector(
          ".hs-menu-wrapper.flyouts > ul > li > ul.open-menu-list"
        ),
        r = this.parentNode.querySelector("ul");
      if (t) {
        t.removeAttribute("style");
        t.classList.remove("open-menu-list");
      }
      t &&
        t.parentNode.querySelector("a").setAttribute("aria-expanded", "false");
      if (r) {
        r.style.visibility = "visible";
        r.style.opacity = "1";
        r.style.display = "block";
        r.classList.add("open-menu-list");
      }
      r && this.setAttribute("aria-expanded", "true");
    });
    Array.prototype.forEach.call(
      e.querySelectorAll("ul li:last-child > a"),
      function (e, t) {
        e.addEventListener("blur", function (e) {
          if (!this.parentNode.querySelector("ul")) {
            var t = this.parentNode.parentNode;
            if (t) {
              t.removeAttribute("style");
              t.classList.remove("open-menu-list");
            }
            this.parentNode.parentNode.parentNode
              .querySelector("a")
              .setAttribute("aria-expanded", "false");
          }
        });
      }
    );
    e.querySelector("a").addEventListener("mouseout", function (e) {
      var t = document.querySelector(
        ".hs-menu-wrapper.flyouts > ul > li > ul.open-menu-list"
      );
      if (t) {
        t.removeAttribute("style");
        t.classList.remove("open-menu-list");
      }
      t &&
        t.parentNode.querySelector("a").setAttribute("aria-expanded", "false");
    });
  });
  Array.prototype.forEach.call(t, function (e, t) {
    e.querySelector("a").addEventListener("focus", function (e) {
      var t = document.querySelector(
          ".hs-menu-wrapper.flyouts > ul > li > ul ul.open-menu-list"
        ),
        r = this.parentNode.querySelector("ul");
      if (t) {
        t.removeAttribute("style");
        t.classList.remove("open-menu-list");
      }
      t && t.querySelector("a").setAttribute("aria-expanded", "false");
      if (r) {
        r.style.visibility = "visible";
        r.style.opacity = "1";
        r.style.display = "block";
        r.classList.add("open-menu-list");
      }
      r &&
        this.parentNode
          .querySelector("a")
          .setAttribute("aria-expanded", "true");
    });
    e.querySelector("a").addEventListener("mouseout", function (e) {
      var t = document.querySelector(
        ".hs-menu-wrapper.flyouts > ul > li > ul ul.open-menu-list"
      );
      if (t) {
        t.removeAttribute("style");
        t.classList.remove("open-menu-list");
      }
      t && t.querySelector("a").setAttribute("aria-expanded", "false");
    });
  });
})();
