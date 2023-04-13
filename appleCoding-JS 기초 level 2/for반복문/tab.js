// 버튼 0 누르면
//    -모든  오랜지 클래스명 삭제
//   - 버튼0에 오랜지 클래스명 추가
//   - 모든 div애 붙여있는 쇼 클래스 삭제
//   - tab 0 에 쇼 클래스명 추가

$('.tab-button')
  .eq(0)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
  });

$('.tab-button')
  .eq(1)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
  });

$('.tab-button')
  .eq(2)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
  });
