console.log('__________Topic1__________');

// 코멘트는 이곳에 작성합니다.

/* 
자유로운
줄바꿈이 가능한 코멘트입니다.
*/

console.log('Hello Codeit!');

// 추상화
// 목적을 명확히 불필요한것들 숨기고 핵심만 드러내기

let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2);

function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('Bonjour');
  console.log(sentence);
}

// 함수 호출
greetings('Hola');

// 이름을 입력받아 안녕하세요 - 님 출력
function welcome(name) {
  console.log('안녕하세요 ' + name + ' 님');
};

welcome('우예인');
welcome('codeit');

// x의 거듭제곱 구하는 함수
function printSquare(x) {
  console.log(x * x);
};

printSquare(2);
printSquare(3);
printSquare(5);

// 프로필을 입력받고 출력하는 함수
function introduce(name, birth, nationality, job){
  console.log('안녕하세요 ! 반갑습니다 !');
  console.log('제 이름은 ' + name + ' 입니다.');
  console.log('생년월일은 ' + birth + ' 이고,');
  console.log('국적은 ' + nationality + ' 입니다.');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다!');
};

// 이름, 생년월일, 국적, 직업 작성
introduce('우예인', '04.07.13', 'korea', '학생');

// 함수의 return 문
function getTwice(number) {
  return number * 2;
}

let x = getTwice(5);
let y = getTwice(2);

//         10 * 4 = 40
console.log(x * y);