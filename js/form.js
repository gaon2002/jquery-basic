$(function() {
  // id属性がcheckの要素がクリックされたら
  $('#check').on('click', ()=> {
    // 名前を取得する
    console.log('名前：' + $('[name="username"]').val());

    //  性別を取得する ※checkedされている値をvalで取得する
    console.log('名前：' + $('[name="gender"]:checked').val());

    // 血液型を取得する
    console.log('血液型：' + $('[name="blood"]').val());

    // 趣味(チェックボックスを取得する)
    $('[name="hobby"]:checked').each( function() {  //functionの代わりに()=>は使えないか？
       // $(this)は1つずつの選択された要素を意味する
       console.log('趣味：' + $(this).val());
     });
  });

  // inputイベント(名前の入力）でテキストボックスの値を取得する
  $('[name="username"]').on("input", function() { // ()=> は使えない？　これに変更すると動作しない
    let input = $(this).val(); //自動的に$(this)ができる？

    // 入力文字があればボタンを押せる、なければボタンを押せなくする
    if (input) { //この条件文でinputされているかどうかが判断できる？
      // テキストボックスに値が入力されていれば、ボタンを有効にする（disabled属性をfalseにする）
      $('#check').prop('disabled', false);
    } else {
      //テキストボックスに値が入力されていなければ、ボタンを無効にする（disabled属性をtrueにする)
      $('#check').prop('disabled', true);
    };
  });

  // 趣味のチェックボックスが変更されたら
  $('[name="hobby"]').on('change', ()=>{
    // チェックの数が３より大きかったら
    if($('[name="hobby"]:checked').length > 3) {
      // チェックをつけようとしたものだけチェックを外す
      $(this).prop('checked', false);

      // 注意を促すメッセージを表示する
      alert('３つまでしか選択できません');
    }
  });
});