//Using what you learned from the README, hypothesize what would happen in each of the following cases.
//If the code will throw an error, explain why in a comment. Otherwise, explain what the result would be in
//a comment. 
//Do NOT run the code... run it in your mind, instead. :)

//1. Will this function throw an error or not? Explain your answer.
var multiplyTwoNums = function(factor1, factor2){
   return(factor1 * factor2);
}
multiplyTwoNums();
console.log(factor1);
//your comment here

//2. Will this function throw an error or not? Explain your answer.
var name = "Bruce";
var returnName = function(nameArg){
   name = "Ryan";
   return(nameArg + name);
}
returnName("My name is ");
console.log(name);
//your comment here

//3. Will this function throw an error or not? Explain your answer. 
//*Don't get confused by the two ${ } on line 29. They are called template literals and simply allow
//you to place variables into a string*
var pizzaType = "cheese"; 
var pizzaMaker = function(customerName, kindOfPizza){
   return(`Your name is ${customerName} and you ordered a ${kindOfPizza} pizza.`);
}
pizzaMaker("Ryan", pizzaType);
console.log(customerName, pizzaType);
//your comment here