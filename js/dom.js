$(function(){
  // $('HTML要素')でHTML要素を取得できる
  const p = $('p').text();
  console.log(p);
  // HTMLファイルを編集しなくても、jQueryのtext()メソッドでテキストを変更できる
  // .text()：取得したHTML要素を取得・変更できる
  $('p').text('jQueryを学習しよう')

  // 変数の初期化
  let num = 0;

  // id属性がappendの要素がクリックされたら要素を追加
  $('#append').on('click', ()=>{
    // クリックでnumを1ずつ増やす
    num++;
    $('ul').append('<li>appendで追加' + num + '</li>');
  });

  // id属性がremoveの要素がクリックされたら末尾要素を削除
  $('#remove').on('click', ()=>{
    // numを1ずつ減らす
    // num--;
    // liの末尾を一つ減らす
    $('li:last').remove();

    // if (num < 0) {
    //   num = 0;
    // }
  });

    // id属性がshowの要素がクリックされたら要素を表示
    $('#show').on('click', ()=>{
      $('ul').show();
    });

    // id属性がhideの要素がクリックされたら要素を表示
    $('#hide').on('click', ()=>{
      $('ul').hide();
    });

});