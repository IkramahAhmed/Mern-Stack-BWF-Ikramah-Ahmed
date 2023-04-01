//using commments
// console.log('Hello from world');

// ............Variables........................

// // Variables

// let age=23;
// console.log(age);

// // const
// // all const declaration must be inialized at once and once we inialized you cannot reassoagn a new value

// // correct way for using const
// const a=700;
// console.log(a);

// // wrong way for using const
// const b=400;
// b=9000;
// console.log(b);

// // Let
//  // this is opposite to const .we are reassign a new value and there is no error.beacuse javasript is dynamicallay typed so pick the last assign value
// const c=400;
// c=9000;
// console.log(c);

// ............... Non premetive data type.....................
// Non premetive data type
// // how to define object
// const person={
//     fName:'ikramah',
//     lname:'ahmed'


// }
// console.log(person.fName);
// // ....................................
// // How to define array
// const arr =[1,3,4,5]
// console.log(arr[0]);

// .............Operators.......................
//  Operators

// And Operator
// let x=10;
// let y=8;

// const val = x>8 && 8>y
// console.log(val);

// or Operator
// let x=10;
// let y=8;

// const val = x>20 || 8>y
// console.log(val);

// // logical end operators
// const valid=true;
// // agar true assign kia hoga toh yeah false anser aiga or agar false assign kia hoga toh true answer aiga
// console.log(!valid);

// // ..............Ternary Operators......................
// // Ternary Operators
// const isEven=10%2 ===0?true:false
// console.log(isEven);
// ans true

// ...............Type Conversion........................

// implicit Conversion:javascript itself wil authometically convert the type
//explicit Conversion:where you manually convert the type

console.log(2 + '3')//if yoy add number and string the result is string  
//answer is true3

console.log('2' + '3')//beacuse javascript will autometically convert the string into integer
//answer is 5
console.log('5' - 'true')
//answer is 4
console.log('5' - 'false')
//answer is 5

console.log((500).toString());//ismen hum 500 ko string men convert kr rahay hen
console.log(Boolean(10));//ismen hum 10 ko boolean men convert kr rahay hen or answer true aiga or  null undefinde ka answer sirf false aiga

// ...............Loops..................
for(let i=0;i<=6;i++){
    console.log(i)
}
// while loop
//the inilazer variable is set before the loop 
// do-while loop
// executed atlest onetime 

// ........function.......
function a (){
    console.log('hello')
}
a();
//muiltiple people same message but only name changed
function a (username){
    console.log('hello' +username)
}
a('ali');
a('ahmed');
a('noor');

// ......arrow function...........
const arrow =(a,b)=>a+b;
const sum =arrow(5,6);

// ...........scope......
// is an accessbility or visisbilty of variables
//three type of scope block ,

// block.
// not access variables on outside only access for inside  just like that
if(true){
    const myName='ikramah';
}
console.log(myName);//error aiga 

//..global scope 
//you can access both places outside the function and inside the function


// .................
const a= document.querySelector('container');
console.log(a + "ddjdj");