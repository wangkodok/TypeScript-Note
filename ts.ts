const strTest: string = "ok";

let objArrType: {
  name: string;
  age: number;
}[];

// objArrType = {
//   name: "string",
//   age: 100,
// };

// 객체배열
objArrType = [
  {
    name: "string",
    age: 100,
  },
];

// let objArrType: {
//   name: string;
//   age: number;
// }[];

// 제네릭 함수
function generics<Type>(name: Type): string {
  return name + "string";
}

generics<string>("type");
generics<number>(100);
generics<boolean>(true);
