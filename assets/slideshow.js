
// Control automatic carousel
const autoSlide = function () {
      interval = setInterval(utils.next, 10000);
};

const utils ={
  next(){
    var slides = document.querySelectorAll('.slideshow .slide');
    slides.forEach(function (item) {
      if(item.classList.contains('active')){
        item.classList.remove('active');
      }else{
        item.classList.add('active');
      }
      })
  }
};

const clickBtn = function(){
    var btn = document.querySelectorAll('.slideshow .control-btn');
    btn.forEach(function (item) {
      item.addEventListener('click',function () {
          utils.next();
        })
      })
}
autoSlide();
clickBtn();
