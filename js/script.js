window.onload = function () {
  (function () {

    var keyEvent = {
      init: function () {
        this.cacheDOM();
        this.bindEvents();
      },
      cacheDOM: function () {
        this.form = document.getElementById("proj_form");
        this.field = document.getElementById("name");
      },
      bindEvents: function () {
        for (var i = 0; i < this.form.children.length; i++) {
          if (this.form.children[i].nodeName === "INPUT") {
            console.log('a');
            this.form.children[i].addEventListener("keyup", this.test(i));

          }
        }

          // this.form.addEventListener("keyup",function () {
          //   for (var i = 0; i < keyEvent.form.children.length; i++) {
          //     if (keyEvent.form.children[i].nodeName === "INPUT" && event.key === "Enter") {
          //       this.children[i].setAttribute("autofocus","autofocus");
          //     }
          //   }
          // });
      },
      test: function (i) {
        console.log(event.key);
        if (event.key === "Enter") {
          console.log('h');
            this.form.children[i].setAttribute("autofocus","autofocus");
        }
      }
    };

    keyEvent.init();
  }());

};
