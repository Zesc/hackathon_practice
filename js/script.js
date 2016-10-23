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
      },
      bindEvents: function () {
        this.selector.addEventListener("click", this.showPalette);
      },
      showPalette: function () {
        palettePopUp.palette.classList.toggle("show-palette");
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
      }
    };

    // var keyEvent = {
    //   init: function () {
    //     this.cacheDOM();
    //     this.bindEvents();
    //   },
    //   cacheDOM: function () {
    //     this.form = document.getElementById("proj_form");
    //     this.field = document.getElementById("name");
    //   },
    //   bindEvents: function () {
    //     for (var i = 0; i < this.form.children.length; i++) {
    //       if (this.form.children[i].nodeName === "INPUT") {
    //         console.log('a');
    //         this.form.children[i].addEventListener("keyup", this.test(i));
    //
    //       }
    //     }
    //
    //       // this.form.addEventListener("keyup",function () {
    //       //   for (var i = 0; i < keyEvent.form.children.length; i++) {
    //       //     if (keyEvent.form.children[i].nodeName === "INPUT" && event.key === "Enter") {
    //       //       this.children[i].setAttribute("autofocus","autofocus");
    //       //     }
    //       //   }
    //       // });
    //   },
    //   test: function (i) {
    //     console.log(event.key);
    //     if (event.key === "Enter") {
    //       console.log('h');
    //         this.form.children[i].setAttribute("autofocus","autofocus");
    //     }
    //   }
    // };

    palettePopUp.init();
  }());

};
