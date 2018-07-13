// 类型注解
// function greeter(person: string) {
//     return 'Hello,' + person;
// }
// let user = "Test";
//
// user = [1,2,3];
//
// document.body.innerHTML = greeter(user);

// 接口的作用
// interface Person{
//     firstName: string,
//     lastName: string,
// }
//
// function greeter(person: Person) {
//     return 'hello' + person.firstName + person.lastName;
// }
//
// let user = {
//     firstName: "111",
//     lastName: "User",
// };
//
// document.body.innerHTML = greeter(user);

// 类
class Student{
    fullName: String;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + middleInitial + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'hello' + person.firstName + person.lastName;
}

let user = new Student('1', '2', '3');

document.body.innerHTML = greeter(user);

