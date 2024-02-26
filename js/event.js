// $(function(){
// // イベント処理：指定要素(ボタン)がクリックされたら文字列
// // 　なお、始まったイベントを終了させたいときは"off.()"を使う
//   $('button').on('click', ()=> {
//     // 関数：クリックされた後の処理
//     console.log('ボタンがクリックされました');
//   });
// });

// 複数イベントの処理
$(function(){
  // 複数処理の時はon(の後に波括弧でイベントをくくる
  $('div').on({
    //クリックしたとき
    'click': ()=>{
      // 背景を赤にする
      $('div').css('background-color', 'red');
      // テキストを「click」
      $('div').text('click');
    },
    //ダブルクリックしたとき
    'dblclick': ()=>{
      //背景を緑
      $('div').css('background-color', 'green');
      //テキストを「dbclick」
      $('div').text('dblclick');
    },
    //指定要素内にカーソルが入ったとき
    'mouseenter': ()=>{
      // 背景を青
      $('div').css('background-color', 'blue');
      // テキストを「mouseenter」
      $('div').text('mouseenter');
    },
    // 指定要素内からカーソルが出たとき
    'mouseout': ()=>{
      // 背景色をgray
      $('div').css('background-color', 'gray');
      // テキストを「mouseout」
      $('div').text('mouseout');
    },
  });
});