// //두 개는 같은 의미 Common Js
// const moduleData = require("./math");
// const {add,sub} = require("./math");
import randomColor from "randomcolor";
import { add,sub} from "./math.js"

 console.log(sub(1,2));
 console.log(add(1,2));
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

const color = randomColor();
console.log(color);



