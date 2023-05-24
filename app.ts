class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello, " + this.name;
  }
}

const person = new Person("Lee");

console.log(person.sayHello());

// 문자열, 숫자 타입 사용하여 출력
const str: string = "문자열";
const num: number = 100;
console.log(str, num);

// 함수선언식
function myFunction(a: number, b: number) {
  return a + b;
}
const result = myFunction(1, 2);
console.log(result, "함수선언식");

// 함수표현식
const test = (a: number, b: number) => {
  return a + b;
};
const resultTest = test(1, 2);
console.log(resultTest, "함수표현식");

// 참, 거짓
let isDone: boolean = false;
let n: null = null;
let u: undefined = undefined;
let myStr: string = `템플릿 리터럴`;
console.log(myStr);

// 오브젝트
let obj: object = {
  name: "홍길동",
  age: 100,
};

// 배열
let arrayAny: any[] = [1, "two", true]; // 모든 타입 넣기
let arrayNumber: number[] = [1, 2, 3]; // 숫자만 넣기
let arrayString: String[] = ["홍길동", "홍길순", "홍길"]; // 문자열만 넣기

// 고정된 만큼의 타입으로 배열 선언
let arrayType: [string, number];
arrayType = ["문자열", 100];
console.log(arrayType[0]);

// 열거형 (숫자로 구분되는 문서화)
enum count {
  one = 100,
  two,
  three,
}
let resultCount: count = count.three;
console.log(resultCount); // 102

// any 타입 체크가 필요 없는 곳에 사용
let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);

// void 일반적으로 함수에서 반환 값이 없을 경우 사용
function warnUser(): void {
  console.log("This is my warning message");
}

function infiniteLoop(): never {
  while (true) {
    console.log("무한 루프");
  }
}

function error(message: string): never {
  throw new Error(message);
}

// Date 타입
const today: Date = new Date();
console.log(today);

// HTMLElement 타입
const elem: HTMLElement = document.querySelector(
  "#myId"
) as HTMLParagraphElement;
console.log(elem);

// class isPerson {}
// Person 타입
// const isperson: Person = new isPerson();
// console.log(isperson);

// 타입을 바꾸지 못 한다.
let foo: string; // 문자열 타입
let bar: number; // 숫자 타입
let baz: boolean; // 불리언 타입
// foo = "Hello";
// bar = 123;
// baz = "true"; 에러

// 반환 값이 number 사용
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(10, 10)); // 20

// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}
// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;
// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: "typescript", completed: false };
console.log(todo.content); // typescript

// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}
// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};
console.log(squareFunc(10)); // 100

// 선택적 프로퍼티
interface UserInfo {
  username: string;
  password: string;
  age?: number;
  address?: string;
}
// age, address 안 들어가도 된다.
const userInfo: UserInfo = {
  username: "ungmo2@gmail.com",
  password: "123456",
};
console.log(userInfo.username);

// 타입 앨리어스
type isPerson = {
  name: string;
  age?: number;
};
// 빈 객체를 Person 타입으로 지정
const isPersons = {} as isPerson;
isPersons.name = "Lee";
isPersons.age = 20;
console.log(isPersons);
