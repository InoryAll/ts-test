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
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'hello' + person.firstName + person.lastName;
}
var user = new Student('1', '2', '3');
document.body.innerHTML = greeter(user);
