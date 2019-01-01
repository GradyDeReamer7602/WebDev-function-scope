var answerOne, 
   answerTwo, 
   answerThree;

var answerOneFunc = function() {
  if (answerOne === "true") {
    return "correct";
  } else if (answerOne !== "true") {
    return "false";
  }
};
var answerTwoFunc = function() {
  if (answerTwo === "false") {
    return "correct";
  } else if (answerTwo !== "false") {
    return "false";
  }
};
var answerThreeFunc = function() {
  if (answerThree === "true") {
    return "correct";
  } else if (answerThree !== "true") {
    return "false";
  }
};
