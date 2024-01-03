/* Variables : var * let * const */
/* 
var x = 20;
console.log(x); 
var x = 25;
console.log(x) 
  */

/* let x = 20;
console.log(x);
let x = 25;
console.log(x)
 */

//const x = 20;
//x = x + 25
//console.log(x);
 //const x = 25;
 //console.log(x)



//console.log(x)
//var x = 20; 

//console.log(x)
//let x = 20; 

//console.log(x)
//const x = 20; 

//  if (2==2) {
     //var age = 20;
    //let age = 20;
// const age = 20;
 // console.log(age)
// }
 //const age = 20;
 //console.log(age)



/* Arrow function */

//let test1 = function() {
  //   return 5;
// }
 //console.log(test1());


// let arrowTest = () => {
//     return 5;
// } 
// let arrowTwo = () => 5;
// console.log(arrowTest());
// console.log(arrowTwo());

// let arrowTest3 = function(n) {
//     return n * 2;
// }
//let arrowTest3 = (n) => n * 2;
//let arrowTest3 = (n,m) => n * 2;

//console.log(arrowTest3(20))



/* String Methods */

//const title = 'Jack and Jill Went Up the Hill';

//console.log(title.startsWith('Jack, 0'));
//console.log(title.startsWith('Jack'));
//console.log(title.startsWith('Jill', 9));

//console.log(title.endsWith('Hill'));
// console.log(title.endsWith('hill'));
// console.log(title.endsWith('Jill', 13));

//let email = 'admin@example.com';
//console.log(email.includes('d'));

//let str = 'JavaScript String ';
//console.log(str.includes('Script'));
//console.log(str.includes('y'));
//console.log(letter.includes('y'));
// console.log(str.includes('script'));
//console.log(str.includes('Script', 4));

//console.log(str.repeat(2));
// let str2 = str.repeat(2)

 //console.log(str2)


/* Template Literals */

// const myName = "Karim"

// let perviously = "Hello wordl, I am" +" " + myName +" \n" +
// "Have a nice day \n" +
// "I wish you the best";
// console.log(perviously)

// let now = `Hello world, I am ${myName} Have a nice day
// I wish you the best
// hello again` 
// console.log(now)
// let age = 25;

//  console.log(`Hello, my age is: ${age}`)


//  let name = 'aziz';

// console.log("hello " + name + " ,how are you ?");

// console.log(`hello ${name} ,how are you ?`)


// console.log(perviously);
// console.log(now);


/* Spread Operator ... */

// let array1 = [1,2,3,4],
//     array2 = [5,6,7];
// console.log(array1.concat(array2));

// console.log(array1)
// console.log(...array1)

// console.log([...array1])

// console.log({...array1})

// let allArrays = [...array1,...array2];

// console.log(allArrays);

// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3]

// console.log(sum(1,2,3))
// console.log(numbers)
// console.log(...numbers)
// console.log(sum(...numbers));


/* Array Methodes */

// let array = [15, 24, 15, 26, 8, 1, 45];
// console.log(array)

// let array1 = array.map(el=> el*2)
// console.log(array1);
// let array2 = array.filter(el=> el<20)
// console.log(array2);
// let array3 = array.reduce((acc, cur) => acc + cur ); 
// console.log(array3);
// let array4 = array.find(el=> el<15);
// console.log(array4) ;
// let array5 = array.findIndex(el=> el<50);
// console.log(array5);


/* Destructuring */

// const contact = {
//     firstName: 'Jhon',
//     lastName: 'Doe',
//     age: '26',
//     city: 'London',
//     email: 'jhon@gmail.com',
//     address : {
//             city: 'manar',
//             country: 'Tunisia'
//     }
// }


// console.log(contact.address.country)
// console.log(contact.address.city)

// const { firstName, age, city } = contact

//console.log(address.country)

// console.log(`My name is: ${firstName}, 
// My age is: ${age} and I am from ${city} and my email is: ${contact.email}`);

/********* Ternary Operator **********/

// let x = 5;

// if (x>10) {
//     console.log('x is greater than 10')
// }
// else{
//     console.log('x is less than 10')
// }

// Condition ? If true : If false

//  x > 10 ? console.log('is greater than 10') :
//  x==5 ? console.log('x is equal to 5') : console.log('x is less than 10')
 
// x > 10 ? console.log('is greater than 10') :
// (x==10) ? console.log('x is less than 10') : null 

// 2==23 ? console.log('hello') : console.log('good morning')

// if (x < 0 ) {
//     console.log('We cannt count a negative number')
// }

// x < 0 ? console.log('We cannt count a negative number')
// : null




/******* Modules *******/

// import { a, tab, sum  } from './module.js';

// console.log(a);
// console.log(tab);
// console.log(sum(5,9));

/******  enlever les voyelles d'une chaine de caractères ****/
// function disemvowel(str) {
//   return str.replace(/[aeuio]/gi,'');
// }
//  console.log(disemvowel("ali"))

/* calcul de nombre de Os et de X */ 
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return ( x.length) === (o.length);
  
// }
// console.log (XO("ooxxpj"))


/* calcul le carré de chaque digit dans un nombre */ 
// function squareDigits(num){
//   return +((num+'').split('').map(value=>value*value).join(''))
// }
// console.log(squareDigits(991))

/* find short word */
// function findShort(s){
//   //return Math.min(...s.split(" ").map (s => s.length));
//     console.log(...s.split(" ").map(s=>s.length));
// }
// console.log(findShort("ali ecole"))

/*complementary DNA*/
// function DNAStrand(dna){ 
//   const DNAComplement = {
//     'G' : 'C',
//     'C' : 'G', 
//     'T' : 'A',
//     'A' : 'T'
//   }
  
//   return dna.split('').map(elem => DNAComplement[elem]).join('')

// }
// console.log(DNAStrand("ATTCG"))

/*Descending Order   */
// function descendingOrder(n){
// return + (n+'').split('').sort().reverse().join('')
// }
// console.log(descendingOrder(554229))


/* Sum of positive*/
// function positiveSum(arr) {
//   return + arr.filter(el=> el>0).reduce((total,next)=>total+next,0);
// }
// console.log(positiveSum([1,-1,2,4]))


/* Isograms */

// function isIsogram(str){
//   return !str.match(/([a-z]).*\1/i); 
// }
// console.log(isIsogram("abc"))

/* List Filtering */

// function filter_list(l) {
//   return l.filter(v => typeof v == "number")
//   }
// console.log(filter_list(1,2,3))
/* find the samallest interger in an arry*/ 
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

/* sum the two smallest interger in array*/

// function sumTwoSmallestNumbers(numberss) {  
//     let sortedNumbers = [...numberss];
//     sortedNumbers.sort((a,b)=>(a-b))
//     return sortedNumbers[0] + sortedNumbers[1]
//   }
// console.log(sumTwoSmallestNumbers(1,2,-1,-20))


/* Growth of population*/

// function nbYear(p0, percent, aug, p) {
//   let year=0;
//   while (p0<p){year++; p0=p0+(p0*(percent/100))+aug}
//   return year
// }
//   console.log(nbYear(1000,2,50,1200)) 

/* creadit card mask */

// function maskify(cc) {
//   return cc.slice(0,-4).replace(/\w/g,'#')+cc.slice(-4)
//   }
//   console.log(maskify("0012236665544"))

// function rowSumOddNumbers(n) {
// return Math.pow(n, 3);
// }
// console.log(rowSumOddNumbers(3))

/* find divisors */
// function FindDivisors(n) {
//   let Arr= []
//   let i = 0
//   for (i = n ; i > 0; i--) {
//     if (n % i == 0) {
//       Arr = [...Arr , i]
//     }
    
//   }
//   return Arr.length ? Arr : n + ' is prime number';
  
// } 
  
  
// console.log(FindDivisors(13))

/* convert number to string */
// return num.toString();


/* basic math operation */
// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }
// console.log(basicOp('+','1','2'))

/* keep hydtated */
// function litres(time) {
//   return Math.floor(time * 0.5);
// }

/* renvoi le siecle à partir de l'année */

// function century(year) {
//   return Math.ceil(year/100)
// }

/* reverse string */
// function solution(str){
//   return str.split('').reverse().join('');
// }

// /* String end with */
// function solution(str, ending){
// let Len = ending.length
// return str.slice(-Len) == ending ? true: false;
// }
// console.log (solution("crédit",""))


/* Abbrviate two words */
// function abbrevName(name){

//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }


// /*replace U par T*/
// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

/* remove the min */

// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }

/* Convert number to reversed array of digits */

