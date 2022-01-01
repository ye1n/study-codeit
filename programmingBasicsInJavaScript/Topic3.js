console.log('__________Topic3__________');
console.log('___________객체___________');

// object : 객체 / property : 속성

let codeit = {
    // propertyName : property value
    name: '코드잇',
    'born Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

/*  propertyName 작성 규칙

    1. 첫글자는 반드시 문자, 밑줄, 달러기호 중 하나로 시작 !
    2. 띄어쓰기 금지 !
    3. 하이픈(-) 금지 !

    규칙을 벗어나려면 ''로 감싸기 
*/

// 점 표기법
console.log(codeit.name);
console.log(codeit.bestCourse.title);

// 대괄호 표기법 (함수 파라미터로 값을 가져올때는 대괄호 표기법 사용)
console.log(codeit['born Year']);

// 객체 다루기
console.log(codeit.name);
codeit.name = 'codeit'; // 프로퍼티 변경
console.log(codeit.name);

console.log(codeit.ceo);
codeit.ceo = '강영훈' // 프로퍼티 추가
console.log(codeit.ceo);

delete codeit.worstCourse; // 프로퍼티 지우기

// 'propertyName' in object
console.log('name' in codeit);

// 메소드 (Method) : 연관성 있는 여러 함수를 하나로 묶을 때 사용
let greetings = {
    sayHello: function(name) {
        console.log(`Hello! ${name}`);
    },
    sayHi: function() {
        console.log('Hi!');
    },
    sayBye: function() {
        console.log('Bye!');
    }
};

// 함수 호출
greetings.sayHello('Codeit');
greetings['sayHello']('Codeit');

// 직사각형
let rectAngle = {
    width: 30,
    height: 50,
    getArea: function() {
        return rectAngle.width * rectAngle.height;
    }
}

// 삼각형
let triAngle = {
    width: 15,
    height: 40,
    getArea: function() {
        return rectAngle.width * rectAngle.height / 2;
    }
}

// for .. in 반복문

console.log('____for .. in 반복문____')
for (let key in codeit) {
    console.log(key); // key에 접근
    console.log(codeit[key]); // value에 접근
}

// 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬 후,
// 나머지 프로퍼티들은 추가한 순서대로 정력하는 특징이 있다.

let myObject = {
    3: '정수3',
    name: 'codeit',
    1: '정수1',
    birthDay: '2017.5.17',
    2: '정수2',
};

for (let key in myObject) {
    console.log(key);
}

/* 결과
1
2
3
name
birthDay
*/

// Date 객체
let myDate1 = new Date();
console.log(myDate1);
// Wed Dec 29 2021 10:37:55 GMT+0900 (한국 표준시)
// 요일 월 일 년도 시간     시간대

let myDate2 = new Date(1000);
let myDate3 = new Date('2017-05-18T19:11:16');
console.log(myDate3);

// 타임스탬프 : 1970년 1월 1일 00:00:00 UTC 부터 몇 밀리초 지났는지

let myDate4 = new Date(2017, 4, 18, 19, 11, 16);
// ney Date(YYYY, MM, DD, hh, mm, ss, ms);
// 년도와 월은 필수, 나머지는 생략 가능

console.log(myDate4.getFullYear());
console.log(myDate4.getMonth()); // month는 0부터 시작 ex) 1월 -> 0
console.log(myDate4.getDate()); // 일자
console.log(myDate4.getDay()); // 요일 (0-5까지)
console.log(myDate4.getHours());
console.log(myDate4.getMinutes());
console.log(myDate4.getSeconds());
console.log(myDate4.getMilliseconds());

// 간단하게 시간 정보 알아내기 !
let myDate5 = new Date();

console.log(myDate5.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate5.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate5.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

Date.now(); // 메소드가 호출된 시점의 타임스탬프를 반환
console.log(Date.now());
console.log(Number(myDate5));

console.log('___________배열___________');

// 배열 (Array)
let courseRanking = [
    '자바스크립트 프로그래밍 기초', // 요소 (element)
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초'
];

// indexing : index를 통해서 요소에 접근하는 것 (0부터 시작)
console.log(courseRanking[1 + 1]); // 4번째 값 출력
console.log(courseRanking[courseRanking.length - 1]);

courseRanking[4] = '코드잇 최고'; // 요소 추가
console.log(courseRanking[4]);
courseRanking[4] = '코드잇 별로'; // 요소 수정
console.log(courseRanking[4]);

delete courseRanking[4]; // 해당 index에 empty 출력

// 배열 메소드

// splice
courseRanking.splice(4); // empty 사라짐
console.log(courseRanking);

courseRanking.splice(1, 1) // 1번 index부터 1개 요소 삭제
console.log(courseRanking);

courseRanking.splice(1, 1, '준비 중 강의');
console.log(courseRanking);

courseRanking.splice(2, 0, '미완성 강의'); // 요소 삭제 없이 추가만
console.log(courseRanking);

// 배열의 첫 요소를 삭제 : shift()
courseRanking.shift();
console.log(courseRanking);

// 배열의 마지막 요소를 삭제 : pop()
courseRanking.pop();
console.log(courseRanking);

// 배열의 첫 요소로 값 추가 : unshift(value)
courseRanking.unshift('첫번째 강의');
console.log(courseRanking);

// 배열의 마지막 요소로 값 추가 : push(value)
courseRanking.push('마지막 강의');
courseRanking.push('마지막 강의');
console.log(courseRanking);

// 배열에서 특정 값 찾기 (indexOf / lastIndexOf)
console.log(courseRanking.indexOf('마지막 강의')); // 3
console.log(courseRanking.indexOf('또다른 강의')); // 없다면 -1 리턴

// 반대로 lastIndexOf 뒤에서 부터 리턴
console.log(courseRanking.lastIndexOf('마지막 강의')); // 4

// includes : 배열에서 특정 값이 있는지 여부 확인
console.log(courseRanking.includes('첫번째 강의')); // true
console.log(courseRanking.includes('두번째 강의')); // false

// reverse : 배열 뒤집기
console.log(courseRanking); // ['첫번째 강의', '준비 중 강의', '미완성 강의', '마지막 강의', '마지막 강의']
courseRanking.reverse();
console.log(courseRanking); // ['마지막 강의', '마지막 강의', '미완성 강의', '준비 중 강의', '첫번째 강의']

// for .. of 반복문
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24'];

// for .. in 문은 배열에 사용 권장 X (객체에 적합하게 설계된 반복문)
for (let element of influencer) {
    console.log(element);
}

// 다차원 배열
let twoKimensional = [
    [1, 2],
    [3, 4]
];
console.log(twoKimensional[0][1]); // 2

console.log('_________자료형 심화_________');

// 숫자 표기법

let millionaire = 1000000000;
let myNumber1 = 1e9;
// 지수 표기법 : e 왼편에 있는 수에 오른쪽에 있는 수만큼 10의 거듭제곱을 곱하는 의미

console.log(millionaire == myNumber1);

console.log(25e5 == 2500000);
console.log(5.3e3 == 5300);
console.log(-6.1e8 == -610000000);

console.log(16e-5 == 0.00016); // -가 들어가면 알파벳 오른쪽 숫자만큼 10의 거듭제곱으로 나누라는 의미
console.log(3.5e-3 == 0.0035);
console.log(-9.1e-5 == -0.000091);

// 16진법
let hex1 = 0xff;
let hex2 = 0xFF;

// 8진법
let octal = 0o377;

// 2진법
let binary = 0b11111111;

console.log(hex1);

// 숫자형 메소드
let myNumber2 = 3.3591;

// toFixed (0 ~ 100) : 소수점 아래 자릿수 고정 (부족한 자릿수는 0)
console.log(myNumber2.toFixed(7)); // typeof string
console.log(+myNumber2.toFixed(7)); // typeof number

// toString(2 ~ 36)
console.log(myNumber2.toString(2));
console.log(+myNumber2.toString(8));

// console.log(255.toString(2)); -> 소수점으로 인식
console.log(255..toString(2));
console.log((255).toString(8));

// Math 객체

// Math.abs : 절댓값
console.log(Math.abs(-10));

// Math.max : 최댓값
console.log(Math.max(2, -1, 4, 5, 0));

// Math.min : 최솟값
console.log(Math.min(2, -1, 4, 5, 0));

// Math.pow : 거듭제곱
console.log(Math.pow(2, 3));

// Math.sqrt : 제곱근
console.log(Math.sqrt(25));

// Math.round : 반올림
console.log(Math.round(2.3));

// Math.floor : 버림
console.log(Math.floor(2.4));

// Math.ceil : 올림
console.log(Math.ceil(2.4));

// Math.random : 난수 (0~1 사이 값 랜덤 리턴)
console.log(Math.round(Math.random()));

// 문자열 심화
let myString = 'Hi Codeit';

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); // 0부터 1까지
// 두번째 파라미터 생략시 start부터 문자열 끝까지

// 양 끝 공백 제거
console.log(myString.trim());

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자로
console.log(myString.toLowerCase()); // 소문자로

// 요소 탐색
console.log(myString.indexOf('i')); // 앞부터 검색
console.log(myString.lastIndexOf('i')); // 뒤부터 검색

// 요소 접근
console.log(myString[3]); // 대괄호 표기법 (0부터) 
console.log(myString.charAt(3)); // charAt 메소드

// 문자열 길이
console.log(myString.length); // length 프로퍼티

// 기본형과 참조형 (주소값을 참조해서 값에 접근)
//          객체, 배열 등