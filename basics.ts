function fun<Type>(a: Type[], b: Type) {
  return [...a, b];
}

const results = fun([1, 2], "3"); // [1, 2, "3"]
