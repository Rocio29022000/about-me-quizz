"use strict"

//Introduction
let user = prompt("Oh Hello there! What is your name?")
alert("Lovely name " + user + " Very nice to meet you!")
confirm(user + " Would you like to take a look at my page?")


// //New arrays
// let questions = ["Am I from barcelona?", "Did I move schools often?", "Did I work for CMR Surgical?", "Is my goal to make this world a better place? ", "Sneaky one: Do I play 7 instruments?"]
// let answers = ["no", ""]


//Quiz
function quiz(){
    alert("Great! Let's see if you've paid attention! Lets start the quiz... ")
    confirm("Oh wait almost forgot! 1 rule; please answer with yes/no or y/n. If not... you will regret...Amazing now that thats clear! Are you ready?")
    let points = 0
    let birthplace = prompt("Am I from barcelona?".toLowerCase())
    while(true)
    if (birthplace == "yes" || birthplace == "y"){
        alert("Wrong! You didn't read my page did you?")
        // console.log("Wrong! You didn't read my page did you?")
        break
    } else if(birthplace == "no" || birthplace == "n"){
        alert("Correct! Andalucia all the way!")
        points ++
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        birthplace = prompt("Am I from barcelona?".toLowerCase())
    }

    let education = prompt("Did I move schools often?".toLowerCase())
    while(true)
    if (education == "yes" || education == "y"){
        alert("Wrong! Not even once!")
        // console.log("Wrong! Not even once!")
        break
    } else if(education == "no" || education == "n"){
        alert("I sure didnt! Not even once!")
        points ++
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        education = prompt("Did I move schools often?".toLowerCase())
    }

    let experience = prompt("Did I work for CMR Surgical?".toLowerCase())
    while(true)
    if (experience == "yes" || experience == "y"){
        alert("Correct!")
        points ++
        break
    } else if(experience == "no" || experience == "n"){
        alert("Wrong!")
        // console.log("Wrong!")
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        experience = prompt("Did I work for CMR Surgical?".toLowerCase())
    }

    let goal = prompt("Is my goal to make this world a better place? ".toLowerCase())
    while(true)
    if (goal == "yes" || goal == "y"){
        alert("As cheesy as it may sound... (puking sound)")
        points ++
        break
    } else if(goal == "no" || goal == "n"){
        alert("Is this not everyones goal?")
        // console.log("Wrong!")
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        goal = prompt("Is my goal to make this world a better place? ".toLowerCase())
    }
    let instruments = prompt("Sneaky one: Do I play 7 instruments?".toLowerCase())
    while(true)
    if (instruments == "yes" || instruments == "y"){
        alert("Wrong! Who do you think I am??? I only play 6!")
        // console.log("Wrong!")
        break
    } else if(instruments == "no" || instruments == "n"){
        alert("I only play 6...")
        points ++
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        instruments = prompt("Do I play 7 instruments?".toLowerCase())
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

// || guess == 47 || guess == 44 
// , 9, 10]