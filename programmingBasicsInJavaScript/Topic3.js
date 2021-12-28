console.log('__________Topic3__________');
console.log('___________객체___________');

// object : 객체 / property : 속성

let codeit = {
    // propertyName : property value
    name : '코드잇',
    'born Year' : 2017,
    isVeryNice : true,
    worstCourse : null,
    bestCourse : {
        title : '자바스크립트 프로그래밍 기초',
        language : 'JavaScript'
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

// 대괄호 표기법
console.log(codeit['born Year']);

// 객체 다루기

console.log(codeit.name);
codeit.name = 'codeit'; // 프로퍼티 변경
console.log(codeit.name);

console.log(codeit.ceo);
codeit.ceo = '강영훈'// 프로퍼티 추가
console.log(codeit.ceo);

console.log(worstCourse);
delete codeit.worstCourse; // 프로퍼티 지우기
console.log(worstCourse);

// 'propertyName' in object
console.log('name' in codeit); 