// 类型注解
function greeter(person: string) {
    return 'Hello,' + person;
}
let user = "Test";

user = [1,2,3];

document.body.innerHTML = greeter(user);
