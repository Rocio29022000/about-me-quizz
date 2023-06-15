"use strict"

//Introduction
let user = prompt("Oh Hello there! What is your name?")
alert("Lovely name " + user + " Very nice to meet you!")
confirm(user + " Would you like to take a look at my page?")


// //New arrays=
function quizA(){
    let questions = ["Am I from barcelona?", "Did I move schools often?", "Did I work for CMR Surgical?", "Is my goal to make this world a better place? ", "Sneaky one: Do I play 7 instruments?"]
    let answers = ["no", "no", "yes", "yes", "no"]
    let poss_ans = ["n", "n", "y", "y", "n"]
    let ans = ""
    alert("Great! Let's see if you've paid attention! Lets start the quiz... ")
    confirm("Oh wait almost forgot! 1 rule; please answer with yes/no or y/n. If not... you will regret...Amazing now that thats clear! Are you ready?")
    let points = 0
    for (let i = 0; i < questions.length; i ++){
        ans = prompt(questions[i]).toLowerCase()
        if (ans == answers[i] || ans == poss_ans[i] ){
            alert("Correct!")
            points ++
        } else if (answers.includes(ans) == false && poss_ans.includes(ans) == false){
            alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
            points --
        } else{
            alert("Wrong!")
        }
    }
    alert("Amazing " + user + " you have completed the quiz! You scored: " + points + " points." )
}

//Number guesser game
function numberGuesser(){
    const correct_ans = Math.floor(Math.random() * 10 + 1);
    let ans = prompt("Guess the number! You have 4 attempts! Hint: It's between 1-10")
    let lives = 4

    for (let i= 0; i < 4; i ++){
        lives = 3 - i
        console.log("lives remaining: " + lives)
        if (lives == 0){
            alert("Sorry, no more chances... The correct answer was " + correct_ans)
        } else if (ans < correct_ans){
            alert("Too low, try again!")
            ans = prompt("Guess my favourite number! You have: " + lives + " more attempts!")
        } else if (ans > correct_ans) {
            alert("Too high! Try again!")
            ans = prompt("Guess my favourite number! You have: " + lives + " more attempts!")
        } else if (ans == correct_ans){
            alert("Spot on!")
            break
        }
        else{
            alert("Your answer is invalid please try again ")
            ans = prompt("Guess my favourite number! You have: " + lives + " more attempts!")
        }
    }

}

//Question 7
function seventhQ(){
    let siblingsage = [20, 25, 30, 36, 41, 29, 40, 47, 44, 34, 50 ]
    let counter
    let guess = prompt("Let's try a guessing game... Guess any of my siblings ages. You have 6 attempts. The options are " + siblingsage )
    for (let i = 0; i < 6; i++){
    counter = 5 - i
    if (counter == 0){
        alert("You have run out of attempts")
    } else if (guess == siblingsage[6]|| guess == siblingsage[7] || guess == siblingsage[8] ){
            alert("Correct!")
            break
    } else{
        guess = prompt("Wrong! you have " + counter + " attempts. The options are " + siblingsage )
    }
}}
