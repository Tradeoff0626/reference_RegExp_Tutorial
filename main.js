const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

//const regexp = new RegExp('the', 'gi');

let regexp = /the/gi;


//'the' 문자의 처음부터 끝까지 대소문자 무시한 1개 패턴
console.log(str.match(regexp));

//fox라는 문자가 있는지 체크
regexp = /fox/gi;
console.log(regexp.test(str));

//fox를 AAA로 대체
console.log(str.replace(regexp, 'AAA'));
//str = str.replace(regexp, 'AAA'); //const가 아니고 let일때 가능


//여러줄 중에 마지막에 '.'으로 끝나는 모든 패턴 (~ dog.)
console.log(str.match(/\.$/gim)); 

//여러중 중에 'd'로 끝나는 모든 패턴
console.log(str.match(/d$/gm));

//여러중 중에 'T'로 시작하는 모든 패턴
console.log(str.match(/^T/gm));


//모든 한 개의 문자
console.log(str.match(/./g));

//'h'와 'p' 사이에 2글자 있는 모든 패턴
console.log(str.match(/h..p/g));

//'fox'나 'dog' 패턴
console.log(str.match(/fox|dog/g));

//'http' 나 'https' 모든 패턴
console.log(str.match(/https?/g));


//'d'가 연속 2개 반복 되는 모든 패턴
console.log(str.match(/d{2}/g));

//'d'가 연속 2개 이상 반복 되는 모든 패턴
console.log(str.match(/d{2,}/g));

//'d'가 연속 2~3개 반복 되는 모든 패턴
console.log(str.match(/d{2,3}/g));

//숫자 또는 영어 문자가(\w) 연속 2~3개 반복 되는 모든 패턴
console.log(str.match(/\w{2,3}/g));

//경계(\b) 구분(숫자, 문자가 아닌)이 있는 숫자 또는 영어 문자가(\w) 연속 2~3개 반복 되는 모든 패턴
console.log(str.match(/\b\w{2,3}\b/g));


//'f', 'o', 'x' 중 하나의 모든 패턴
console.log(str.match(/[fox]/g));

//숫자 1개 이상의 모든 패턴
console.log(str.match(/[0-9]{1,}/g));

//한글 1개 이상의 모든 패턴
console.log(str.match(/[가-힣]+/g));


//63개 Word로 조합된 패턴의 앞뒤 경계. 
//아래의 경우는 6개> thesecon@gmail.com => |thesecon|@|gmail|.|com|
console.log("thesecon@gmail.com".match(/\b/g));

//f로 시작하는 모든 단어
console.log(str.match(/\bf\w{1,}\b/g));

//여러 공백문자(Space, Tab, Return)를 제거하는 예
const h = `  the hello  world			!


`;
console.log(h.replace(/\s/g, ''));


//'@'문자 앞쪽 문자 1개 이상 일치하는 패턴 모두
console.log(str.match(/.{1,}(?=@)/g));

//'@'문자 뒤쪽 문자 1개 이상 일치하는 패턴 모두
console.log(str.match(/(?<=@).+/g));


