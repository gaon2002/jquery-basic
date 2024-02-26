$(function() {
// id属性がredの要素がクリックされたら
  $('#red').on('click', ()=> {
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  })

// id属性がblueの要素がクリックされたら
$('#blue').on('click', ()=> {
  // id属性がtargetの要素のcolorプロパティをredにする
  $('#target').css('color', 'blue');
})

// id属性がaddの要素がクリックされたら
$('#add').on('click', ()=> {
  // id属性がtarget2の要素の背景を.sampleにする
  $('#target2').addClass('sample');
})
// id属性がremoveの要素がクリックされたら
$('#remove').on('click', ()=> {
  // id属性がtarget2の要素の背景を.sampleにする
  $('#target2').removeClass('sample');
})
// id属性がtoggleの要素がクリックされたら
$('#toggle').on('click', ()=> {
  // id属性がtarget3の要素の背景を.sampleにする
  $('#target3').toggleClass('sample');
})
// id属性がhasの要素がクリックされたら　・・・hasClassはどのような場面で使われるか、イメージできない。
$('#has').on('click', ()=> {
  // id属性がtarget3の要素にclass属性があるかを取得する
  // 戻り値は'true'、'false'
  let result = $('#target3').hasClass('sample');

  // 条件分岐して戻り値をコンソールに出力する
  if (result) {
    console.log('sampleクラスがあります');
  } else {
    console.log('sampleクラスはありません');
  }

})

});