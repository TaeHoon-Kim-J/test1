var handlerColor = {
  WColor:function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  BColor:function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
var Links = {
  setColor:function (color) {
    // var i = 0;
    // var alist = document.querySelectorAll('a');
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
function ndhandler(self) {
  var target = document.querySelector('body');
  if (self.value == 'night') {
    self.value = 'day';
    handlerColor.BColor('black');
    handlerColor.WColor('white');
    Links.setColor('skyblue');
  } else {
    self.value = 'night';
    handlerColor.BColor('white');
    handlerColor.WColor('black');
    Links.setColor('blue');
  }
}
