
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

$("#projects > li").hover(
  function () {
    $(this).siblings().addClass("blur");
  },
  function () {
    $(this).removeClass("clicked").siblings().removeClass("blur");
  }
);

$("#projects > li").click(function (e) {
  $(this).addClass("clicked");
});
