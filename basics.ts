// 1
function fun<Type>(a: Type[], b: Type) {
  return [...a, b];
}

const results = fun([1, 2], 3); // [1, 2, 3]

// 2
function genericsFun<T>(a: T[], b: number) {
  return [...a, b];
}

const genericsResults = genericsFun(["1", 2], 3); // ["1", 2, 3]
console.log(genericsResults, "인자 타입 다르게 지정");

// 3
function genericsFunction<T>(result: T) {
  return result + "함수";
}

const genericsResult = genericsFunction("제네릭");
console.log(genericsResult, "값 확인");
