// HTML要素をすべて読み込んだ後から$(function() {・・・});を実行する
// まだ読み込まれていないHTML要素に対して処理を実行してしまうようなエラーを防ぐ
$(function() {
  const title = $('#title').text();
  const list = $('.message').text();
  console.log(title);
  console.log(list);

  // class属性値の先頭が「sample」の要素だけを抽出する
  // 属性フィルタ内にスペースは設けないこと
  const text = $('li[class^="sample"]').text();
  console.log(text);
})