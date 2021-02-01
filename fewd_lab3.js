function greet(){
    return 'Haydo!';
}
var salutation = console.log(greet());

//question 4
function echo(sound){
    return sound;
}

//question 5 
function greet2(name){
    return 'Helllo ' + name+'!'
}
greet2('Yuri');

//question 6
function shout(s){
    return s+s;
}
shout.call(console.log(shout('fire')));

// question 11

function doSomething(name){
    return name;
}
doSomething.call(console.log(doSomething('Yuri')));

// question 12
function multiplyFive(number){
    return number * 5;
}
console.log(multiplyFive(7));

//question 13

function myFunction(){
    return alert('Hello World!');
}
myFunction();

//question 14

function isAnswerRight(answer) {
  return (answer ? 'The answer is right' : 'The answeris wrong');
}

console.log(isAnswerRight(true));
console.log(isAnswerRight(false));

//question 15

function tellFortune(ch,pn,geo,jt){
    return 'You will be a ' + jt + ' '+ 'in' +' '+ geo+ ',' + ' '+ 'maried to '+ pn + ' '+ 'with ' + ch + ' ' + 'kids';

}
var x = console.log(tellFortune(1,'Anne','Dublin','Programmer'));
var y = console.log(tellFortune(2,'Marck','London','Designer'));
var z = console.log(tellFortune(3,'Julie','Berlin','Data Analist'));
