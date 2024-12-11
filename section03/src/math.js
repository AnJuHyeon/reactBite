//math 모듈
function add(a,b) {
    return a + b;
}

//바로 export 해주는 방법
//export function sub(a,b) {
// return a-b; 
// }
function sub(a,b) {
    return a-b;
}

//default 붙혀주면 math 모듈을 대표하는 기본값이 된다.
export default function multiply(a,b) {
    return a * b ;
}

//Common Js
// module.exports = {
//     add : add,
//     sub : sub,
// }



//ES6
export {add, sub};

