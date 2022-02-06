var a = 10;
var b = 20;
var d = 40;
//export default 내보낼거
//export default는 파일당 1회 사용
export default a;

//여러개를 내보내는 export문법
export {a, b};
//export와 export default 동시사용
export default d;
//export키워드는 변수/함수 선언 왼쪽에 써도 됨
export var c = 30;

