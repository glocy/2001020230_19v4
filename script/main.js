$(function(){
  const modal = `
  <div class="modal">
    <div class="modal_inner">
      <a href="https://www.weather.go.kr/w/index.do" title="기상청 날씨누리 바로가기" target="_blank">
        <img src="./images/modal_image01.jpg" alt="오늘의 기상특보">
      </a>
      <p>
        <input type="checkbox" id="today">
        <label for="today">오늘 하루 열지 않음</label>
        <button id="modal_btn"><i class="fa-solid fa-xmark"></i></button>
      </p>
    </div>
  </div>
  `;
  $('body').append(modal);
  
  let ch = $('.modal #today');
  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }

  function closeModal(){
    if(ch.is(':checked')){
      $.cookie('popup','none',{expires:1, path:'/'});
    }
    $('.modal').hide();
  }

  $('.modal #modal_btn').click(function(){
    closeModal();
  });
});

$(document).ready(function(){
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  $('.ad').addClass('bg0' + randomNumber);

  
  $('header').hover(function(){
    let sPos = $(window).scrollTop();
    if(sPos < 936){
      $('header').addClass('act');
      $('header h1 img').attr('src','./images/logo_black.png');
      $('header .gnb > li > a, header i.fas').css('color','#333');
    }
  }, function(){ 
    let sPos = $(window).scrollTop();
    if(sPos < 936){
      $('header').removeClass('act');
      $('header h1 img').attr('src','./images/logo_white.png');
      $('header .gnb > li > a, header i.fas').css('color','#fff');
    }
  });



});