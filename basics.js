var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1
function fun(a, b) {
    return __spreadArray(__spreadArray([], a, true), [b], false);
}
var results = fun([1, 2], 3); // [1, 2, 3]
// 2
function genericsFun(a, b) {
    return __spreadArray(__spreadArray([], a, true), [b], false);
}
var genericsResults = genericsFun(["1", 2], 3); // ["1", 2, 3]
console.log(genericsResults, "인자 타입 다르게 지정");
// 3
function genericsFunction(result) {
    return result + "함수";
}
var genericsResult = genericsFunction("제네릭");
console.log(genericsResult, "값 확인");
