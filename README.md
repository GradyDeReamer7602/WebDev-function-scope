# Function Scope
#### Don't forget to fork and clone

This lesson talks about something called *function scopes*. By the end of this lesson, you should know: what scoping is, why it is useful, and how to use it.

Examine this function and make a guess as to what the output would be if this function were invoked:
```
var addTwoAndThree = function(){
  var two = 2;
  var three = 3;
  return(two + three);
}
```
If you guessed 5, you're correct. 

Nothing new here, right?

If, however, we tried to run this line of code, it would throw an error:

`console.log(two);`

***ERROR: two is not defined***

Why? 

This would fail because the variable two can not be accessed outside of the addTwoAndThree function. The variable two is within the **scope** of addTwoAndThree. If we wanted to be able to access this variable outside of the addTwoAndThree function, we'd need to refactor the code a little bit:
```
var two = 2;

var addTwoAndThree = function(){
  var three = 3;
  return(two + three);
}
```
This code would still work and would allow us to have access to the variable two outside the scope of addTwoAndThree. 
So, this line would now work:

`console.log(two);`

The variable two is in what we call the global scope. That means that two is globally available to all of our code.
This can be both a help and a hindrance to you as a developer. We'll get more into this later. For now, just try to avoid creating variables in the global scope as much as possible.

Test your comprehension of function scopes by going through the exercise(s) in `function-scope.js`