var strTest = "ok";
var objArrType;
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
function generics(name) {
  return name + "string";
}
generics("type");
