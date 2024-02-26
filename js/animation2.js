// フェードイン・アウトと、スライドアップ・ダウンでアニメーション

$(function(){
  // id属性がfadeOutの要素（ボタン）がクリックされたら
  $('#fadeOut').on('click', ()=>{
    //不透明度を0にする
    $('.box').css('opacity', 0);
    //text追加
    $('.box').text('フェードアウト');
  });

  // id属性がfadeInの要素（ボタン）がクリックされたら
  $('#fadeIn').on('click', ()=>{
    //不透明度を1にする
    $('.box').css('opacity', 1);
    $('.box').text('フェードイン');
  });

  //id属性がslideUpの要素（ボタン）がクリックされたら
  $('#slideUp').on('click', ()=>{
    //高さをゼロにする
    $('.box').css('height', 0);
  });

  //id属性がslideDownの要素（ボタン）がクリックされたら
  $('#slideDown').on('click', ()=>{
    //高さを200pxにする
    $('.box').css('height', 200);
  });
});