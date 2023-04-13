// 버튼 0 누르면
//    -모든  오랜지 클래스명 삭제
//   - 버튼0에 오랜지 클래스명 추가
//   - 모든 div애 붙여있는 쇼 클래스 삭제
//   - tab 0 에 쇼 클래스명 추가

var 버튼 = $('.tab-button');
var 설명 = $('.tab-content');

for (let i = 0; i < 버튼.length; i++) {
  버튼.eq(i).on('click', function () {
    버튼.removeClass('orange');
    버튼.eq(i).addClass('orange');

    설명.removeClass('show');
    설명.eq(i).addClass('show');
  });
}

// 버튼.eq(1).on('click', function () {
//   버튼.removeClass('orange');
//   버튼.eq(1).addClass('orange');

//   설명.removeClass('show');
//   설명.eq(1).addClass('show');
// });

// 버튼.eq(2).on('click', function () {
//   버튼.removeClass('orange');
//   버튼.eq(2).addClass('orange');

//   설명.removeClass('show');
//   설명.eq(2).addClass('show');
// });
