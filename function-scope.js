//Using what you learned from the README, hypothesize what would happen in each of the following cases.
//If the code will throw an error, find the corresponding variable for that problem and pass in
//'true'. Otherwise, find the corresponding variable for that problem and pass in 'false'
//Do NOT run the code... run it in your mind, instead. :)

//1. Would this console.log() throw an error or not?
var multiplyTwoNums = function(factor1, factor2){
   return(factor1 * factor2);
}
multiplyTwoNums();
//console.log(factor1); 

answerOne = 'answer'; //Your answer here

//2. Will this console.log() throw an error or not?
var name = "Bruce";
var returnName = function(nameArg){
   name = "Ryan";
   return(nameArg + name);
}
returnName("My name is ");
// console.log(name);

answerTwo = 'answer'; //Your answer here

//3. Will this console.log() throw an error or not?
//*Don't get confused by the two ${ } on line 29. They are called template literals and simply allow
//you to place variables into a string. We'll talk more about these later.*
var pizzaType = "cheese"; 
var pizzaMaker = function(customerName, kindOfPizza){
   return(`Your name is ${customerName} and you ordered a ${kindOfPizza} pizza.`);
}
pizzaMaker("Ryan", pizzaType);
// console.log(customerName, pizzaType);

answerThree = 'answer'; //Your answer here