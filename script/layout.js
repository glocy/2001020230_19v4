// Fullpage .js

$(document).ready(function() {

  $('#fullpage').fullpage({         
    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#cccccc', '#dddddd'],
    anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'],
    menu: '#menu',
    scrollingSpeed: 1000,
    // scrollBar: true,
    onLeave: function(origin, destination, direction) {
      // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
      $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      swiper1.mousewheel.disable();
    },
    afterLoad: function(anchorLink, index) {      
      // 전환이 끝난후 이벤트풀기                               
      $('#fullpage').off('scroll mousewheel');      
      if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); // 모바일분기
      if(swiper1) swiper1.mousewheel.enable();    
      if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
    }
  });       
  
  
});
