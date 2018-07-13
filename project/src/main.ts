import { sayHello } from './greet';

function hello(compiler: string) {
    console.log(`hello from ${ compiler }`);
}

hello("Typescript");

console.log(sayHello("typeScript"));

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "Typescript");

