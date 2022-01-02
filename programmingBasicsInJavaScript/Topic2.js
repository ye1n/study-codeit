console.log('__________Topic2__________');
console.log('__________자료형___________');

// 나머지
console.log(7 % 3);

// 거듭제곱 -> 곱셈보다 우선순위 높음
console.log(2 ** 3);

// 계산하는 방식이나 우선순위는 기본적인 사칙연산을 따른다.

console.log("He said \"I'm Iron man\"");
console.log(`He said "I'm Iron man"`); // 백틱

console.log('Hello' + 'Codeit');
console.log('3' + '5'); // -> 문자열 연결로 연산

// && AND 연산 -> x y 가 모두 참일 때만 참
// || OR 연산 -> x y 중 하나라도 참이면 참
// ! NOT 연산 -> 참이면 거짓, 거짓이면 참 (중첩사용가능)

// 불린 Boolean 
console.log(2 > 1); // true
console.log(2 < 1); // false

console.log(3 === 3); // === : 일치
console.log(3 !== 3); // !== : 불일치

/* == 와 === 차이 : ===는 자료형 까지도 같은지 파악
1 == '1' -> true , 1 === '1' -> false */

//typeof 연산자
console.log(typeof 101);
console.log(typeof 'codeit');
console.log(typeof true);

let name = 'Codeit';

function sayHello() {
    console.log('Hello');
}

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'Codeit');
// 실행시 stringCodeit 출력 typeof 연산자가 더 우선순위기 때문에
// typeof 'Hello' -> string 결과 + 'Codeit' -> stringCodeit

console.log(typeof typeof(3 + 5));

// 형 변환 (Type Conversion) : string, number, boolean
console.log(Number('10') + Number('5')) // -> 숫자 15
console.log(String(10) + String(5)) // 문자열 105

// '', 0, NaN : false가 나오는 falsy값

console.log(1 === '1'); // === 일치
console.log(1 !== true); // !== 불일치
console.log(1 == '1'); // == 동등
console.log(1 != true); // != 부등

// 템플릿 문자열 (template strings)

let year = 2018;
let month = 3;
let day = 11;

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;

function getTwice(x) {
    return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

// null과 undefined
// null : 의도적으로 표현할 때 사용하는 값
// undefined : 값이 없다는걸 확인하는 값

let codeit;
console.log(codeit); // -> 선언 후 값을 지정해주지 않음
codeit = null;
console.log(codeit);

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log('__________추상화___________');

// = 할당 연산자 (Assignment operators)
let q = 10;
q = q - 2;
console.log(q);

// 복잡 할당 연산자
q -= 2;
console.log(q);

// 증가, 감소 연산자
q++;
console.log(q);
q--;
console.log(q);

// 옵셔널 파라미터 (Optional parameters)
function introduce(name, age, nationality = '미국') {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age}살 이고, `);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('우예인', 18, '한국');
console.log('');
introduce('우예인', 18); // 국적을 입력하지 않은 경우 미국 출력

// 옵셔널 파라미터를 여러개 넣는 건 가능, 뒤에 일반 파라미터만 주어지지 않으면 됌

let yy = 6; // 글로벌 변수, 전역 변수

// Scope: 범위, 영역
function myFunction() { // 블록문
    let xx = 3; // 로컬 변수, 지역 변수
    console.log(xx);
    console.log(yy);
}

myFunction();

// 상수 (Constant)

// const - 재선언 불가, 재할당 불가

// let - 재선언 불가, 재할당 가능

// var - 재선언 가능, 재할당 가능

const pi = 3.14;
// pi = 3; 재할당 X

console.log('__________제어문___________');

// switch 문

let myChoice = 4;

switch (myChoice) {
    case 1:
        console.log('토끼 선택');
        break;
    case 2:
        console.log('고양이 선택');
        break;
    case 3:
        console.log('코알라 선택');
        break;
    case 4:
        console.log('강아지 선택');
        break;
    default:
        console.log('1 - 4 사이의 숫자를 선택해주세요.');
}

// 단, 암시적 형변환 허용하지 않기 때문에 === 사용

// for 문 : 초기화부분; 조건부분; 추가동작부분;

// 1. 추가 동작 부분 꼭 채울 필요 X
// 2. 초기화 부분에서 생성한 변수는 for문의 로컬변수
// 3. 초기화 부분도 반드시 채울 필요 X

// while 문
let i = 30;

while (i % 7 !== 0) {
    i++;
}

console.log(i);

// break, continue

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue; // 아래 코드 실행 X 다음 단계로 넘어감
    }
    console.log(i);
}

// 이중 for 문 사용해서 구구단 만들기

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// const 변수 vs const 상수
// myName        MY_NAME