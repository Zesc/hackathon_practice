window.onload = function () {
  (function () {

    var palettePopUp = {
      init: function () {
        this.cacheDOM();
        this.bindEvents();
      },
      cacheDOM: function () {
        this.selector = document.getElementById("color-container");
        this.palette = document.querySelector(".color-palette");
        this.form = document.querySelector("form");
        this.finalForm = document.querySelector(".form-final-container");
      },
      bindEvents: function () {
        this.finalForm.classList.toggle("hide-form");
        this.selector.addEventListener("click", this.showPalette);
      },
      showPalette: function () {
        palettePopUp.palette.classList.toggle("show-palette");
        this.form.classList.toggle("hide-form");
        colorPicker.init();
      }
    };

    var colorPicker = {
      init: function () {
        this.cacheDOM();
        this.bindEvents();
      },
      cacheDOM: function () {
        this.colorOptions = document.querySelectorAll("li");
        this.selector = document.querySelector(".preview-color");
      },
      bindEvents: function () {
        for (var i = 0; i < this.colorOptions.length; i++) {
          this.colorOptions[i].addEventListener("click", this.pickColor);
        }
      },
      pickColor: function () {
        pickedColor = this.children[0].innerHTML;
        colorPicker.selector.style.background = pickedColor;
        palettePopUp.palette.classList.toggle("show-palette");
        palettePopUp.form.classList.toggle("hide-form");
      }
    };

    var keyEnterLast = {
      init: function () {
        this.cacheDOM();
        this.bindEvents();
      },
      cacheDOM: function () {
        this.field = document.querySelectorAll("input")[6];
        this.header = document.querySelector(".header");
      },
      bindEvents: function () {
        // this.field.addEventListener("click", this.showFinalForm);
        this.field.addEventListener("keyup", this.showFinalForm);
      },
      showFinalForm: function () {
        if (event.key === "Enter") {
          palettePopUp.form.classList.toggle("hide-form");
          keyEnterLast.header.classList.toggle("hide-form");
          palettePopUp.finalForm.classList.toggle("hide-form");
        }
      }
    };

    var formFill = {
      init: function () {
        this.cacheDOM();
        this.bindEvents();
      },
      cacheDOM: function () {
        this.divs = document.getElementsByClassName("field-div");
        this.fields = document.getElementsByClassName("first-form-fill");
      },
      bindEvents: function () {
        for (var i = 0; i <   this.fields.length; i++) {
          this.fields[i].addEventListener("keyup", this.test);
        }
      },
      test: function () {
        if (event.key === "Enter") {
          var test = "#" + this.parentNode.nextElementSibling.id;
          window.location.hash = test;
        }
      }
    };
    
    palettePopUp.init();
    keyEnterLast.init();
    formFill.init();
  }());

};
