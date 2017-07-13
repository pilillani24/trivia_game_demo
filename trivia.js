 window.onload = function() {
  $("#set-up").hide();

};

$("#start").click(function(){
  questionNumber = 0;
  $("#set-up").show();
  $("#start").hide();
  playGame(questionNumber);
});

var answer;
var questionNumber;
var count = 10;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
function timer(){
  count= count - 1;
  if (count <= 0){
    clearInterval(counter);
    $("#game-status").text("Out of time!");
    $("#answers").empty();
    $("#question").empty();
    $("#answers").text("The correct answer was: " + answer);
    questionNumber++;
    nextQuestion();
  }
  $("#timer").text(count + " secs");
}

function nextQuestion(){
  setTimeout(function() {
  count = 10;
  counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  timer();
    $("#game-status").empty();
    $("#answers").empty();
    playGame(questionNumber); 
  }, 5000);
}

 var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 10
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 18
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 72
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 7
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 64
  }];

// function playGame(){
//   for(var i = 0; i < questions.length; i++){
//     (function(i){
//       setTimeout(function(){
//         $("#question").text(questions[i].question);
//         for(var j = 0; j < questions[i].choices.length; j++){
//           $("#answers").append('<button id="answer'+ j +'">'+ questions[i].choices[j]+ '</button>'); 
//         }
//       }, i * 30000);
//     })(i);
//   }
// }
function playGame(questionNumber){
  $("#question").text(questions[questionNumber].question);
  for(var j = 0; j < questions[questionNumber].choices.length; j++){
    $("#answers").append('<button id="answer'+ j +'">'+ questions[questionNumber].choices[j]+ '</button>'); 
  }
  answer = questions[questionNumber].correctAnswer;
}




       