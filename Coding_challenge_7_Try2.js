/////////////////////////////////////////////////////////////////////// CODING CHALLENGE 7
/*
1.  Build a function constructor called Question to describe a question.  A question should include:
a. question itself
b. the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c.  correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3.  Store them all inside an array

4.  select one random question and log it on the console, together with the possible answers (each question should have a number) (HINT: write a method for the Question objects for this task).

5.  Use the 'prompt' function to ask the user for the correct answer.  The user should input the number of the correct answer such as you displayed it on Task 4

6.  Check if the answer is correct and print to the console whether the answer is correct or not (HINT: write another method for this).

7.  Suppose this code would be a plugin for other programmers to use in their code.  So make sure that all your code is private and doesn't interere with other programers code (HINT: we learned a special technique to do exactly that).

EXPERT LEVEL

8.  After you display the result, display the next random question, so that the game never ends (HINT: write a function for this and call it right after displaying the result).

9.  Be careful: after Task 8, the game literraly never ends.  So include the option to quit the game if the user writes 'exit' instead of the answer.  In this case, DON't call the function from task 8.

10.  Track the user's score to make the game more fun!  So each time an answer is correct, add 1 point to the score (HINT: I'm going to use the power of clusrues for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11.  Display the score in the console.  Use yet another method for this.
*/

(function() {
 
function Question(questions, answers, correct) {
    this.questions = questions;
    this.answers = answers;
    this.correct = correct;
}

var q0 = new Question("two times thirteen is twenty-six?", ['true', 'false'], 0);
var q1 = new Question("six times eight is forty-eight?", ['true', 'false'], 0);
var q2 = new Question("square root of 2 is 5?", ['true', 'false'], 1);
var q3 = new Question("six times six is thirty six", ['true', 'false'], 0);

var questionsArr = [q0, q1, q2, q3];

Question.prototype.displayQuestion = function() {
    console.log(this.questions);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

var totalScore = 0;

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log("Good Job, you've selected the correct answer");
        ++totalScore;
        console.log("Your current score is " + totalScore);
        
        //Teacher'c code would call the keepScore() function here if the ans was correct Or true.  Callback is keepScore true
        /*
        var sc;
        
        function(ans, callback) {
    if (ans === this.correct) {
        console.log("Good Job, you've selected the correct answer");
        sc = callback(true); //this is keepScore
        
    
        
        because we now when the answer we pass in is the correct answer it wil be "true". 
        
        Remember that the Score() variable accepts only a correct parameter.  And if it's not correct it going to only "return the score" and not make any updates.
        
        Always say we need to store it then write sc  in the variable
        
        } else {
        console.log("Sorry, you've selected the wrong answer");
        
        sc = callback(false);
        //parameter is false and therefore the score is not going to be updated.  All this does is to return the score that is because we only want to display the score if it is false or correct.  So we always need to retrieve the score or value from the function
    }
    
    this.displayScore(sc);
    this point to the prototype chain so displayscore has access to sc because its also in this.checkAnswer
        */
        
    /*
    //this is a method that will display the score in the console.
    
    Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('---------------------------------');
    }
        
        
        
    } else {
        console.log("Sorry, you've selected the wrong answer");
        --totalScore;
        console.log("Your current score is " + totalScore);
    }
    
}

//Teacher's code for keeping score of player
function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        //It's here in this function that the closure returns
        return sc;
    }
    
}
//Now all we need to do is to store it because it returns another function and so I want to keep that function in this variable and we will call it keepScore.

var keepScore = score();

//Remember what closure are.  We call the score function, it defines as a variable and then we return this function here "function(correct").  And this is going to be attached to this variable.  Now thanks for closures we always have access to the variables the other function defines.  THis means that the sc variables will always be accessible by this keep score function here.  We will then call this function if the score is correct.  Here we make use of passing function around because they're first class objects in javascript.  So first class functions.
*/
    
    
function nextQuestion() {
//All of the below is put as function so we can call it over and over again.
//THe array of our questions will always be the same and we do not need to chance it so therefore it can be outside of this "nextQuestion" function.
    
//random question selection
var n = Math.floor(Math.random() * questionsArr.length);

//call the display question
questionsArr[n].displayQuestion();

    
//prompt user for question and answer this will be the answer given
var answer = prompt("Please select an answer");

//check answer and check for exit remark.  If exit remark is different from exit then continue otherwise if we write exit the loop will stop.
if(answer !== 'exit') {
    questionsArr[n].checkAnswer(parseInt(answer));
    
//Teacher's code pass in keepscore function  questionsArr[n].checkAnswer(parseInt(answer) keepScore());    
    
    nextQuestion();
}

}

nextQuestion();

//Now next question is used every time we want to continue the game.  If the user DOESN"T enter "exit" then the game continues.    
    
})();