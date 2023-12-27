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
// 제네릭 함수
function generics(name) {
    return name + "string";
}
generics("type");
generics(100);
generics(true);
