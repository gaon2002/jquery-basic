$(function(){
  $(document).on('keydown', (e) =>{
    // クリックされた場合
    const keyname = e.key
    // 何のキーが押されたかを記載する
      $('div').text(`${keyname}がタイプされました！`);
    
  });
});