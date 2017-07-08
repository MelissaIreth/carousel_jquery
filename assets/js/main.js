    var imgindex = 0,
      items = $('.container div'),
      i = items.length;

    function ciclo() {
      var item = $('.container div').eq(imgindex);
      items.hide();
      item.css('display','inline-block');
    }

    var autoSlide = setInterval(function() {
      imgindex += 1;
      if (imgindex > i - 1) {
        imgindex = 0;
      }
      ciclo();
    }, 5000);

    $('.next').click(function() {
      clearInterval(autoSlide);
      imgindex += 1;
      if (imgindex > i - 1) {
        imgindex = 0;
      }
      ciclo();
    });

    $('.prev').click(function() {
      clearInterval(autoSlide);
      imgindex -= 1;
      if (imgindex < 0) {
        imgindex = i - 1;
      }
      ciclo();
    });