$(document).ready(function () {
  let mouseX, mouseY;
  let ww = $(window).width();
  let wh = $(window).height();
  let traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
  });
});

/*
(function () {
  let addEvent = function (object, type, callback) {
    if (object == null || typeof object == "undefined") return;
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
      object.attachEvent("on" + type, callback);
    } else {
      object["on" + type] = callback;
    }
  };
  function detectMouseMove() {
    // Initial container width
    let containerWidth = $(".containerFocus").outerWidth();
    document.addEventListener("mousemove", function (e) {
      $(".hover").css({
        left: e.pageX,
      });
      $(".left-side").css({
        left: e.pageX + 75,
      });
      var rightSideLeft = containerWidth - e.pageX;
      $(".right-side").css({
        right: rightSideLeft,
      });
    });
  }
  detectMouseMove();

  function detectTouch() {
    // Initial container width
    let containerWidth = $(".containerFocus").outerWidth();
    document.addEventListener("mousemove", function (e) {
      $(".hover").css({
        left: e.pageX,
      });
      $(".left-side").css({
        left: e.pageX + 75,
      });
      let rightSideLeft = containerWidth - e.pageX;
      $(".right-side").css({
        right: rightSideLeft,
      });
    });
  }
  detectMouseMove();

  function touchMove() {
    // Initial container width
    let containerWidth = $(".containerFocus").outerWidth();
    document.addEventListener("touchmove", function (e) {
      $(".hover").css({
        left: e.pageX,
      });
      $(".left-side").css({
        left: e.pageX + 75,
      });
      var rightSideLeft = containerWidth - e.pageX;
      $(".right-side").css({
        right: rightSideLeft,
      });
    });
  }

  touchMove();

  function detectInput(inputType) {
    // Detect container width after resizing
    addEvent(window, "resize", function (event) {
      var containerWidth = $(".containerFocus").outerWidth();
      $(document).bind(inputType, function (e) {
        $(".hover").css({
          left: e.pageX,
        });
        $(".left-side").css({
          left: e.pageX + 75,
        });
        let rightSideLeft = containerWidth - e.pageX;
        $(".right-side").css({
          right: rightSideLeft,
        });
      });
    });
  }

  detectInput("mousemove");
  detectInput("touchmove");
})();*/
