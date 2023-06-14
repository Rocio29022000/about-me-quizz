"use strict"
//Introduction
let user = prompt("Oh Hello there! What is your name?")
alert("Lovely name " + user + " Very nice to meet you!")
confirm(user + " Would you like to take a look at my page?")

//Quizz
function quiz(){
    alert("Great! Let's see if you've paid attention! Lets start the quiz... ")
    confirm("Oh wait almost forgot! 1 rule; please answer with yes/no or y/n. If not... you will regret...Amazing now that thats clear! Are you ready?")
    
    let birthplace = prompt("Am I from barcelona?".toLowerCase())
    while(true)
    if (birthplace == "yes" || birthplace == "y"){
        alert("Wrong! You didn't read my page did you?")
        // console.log("Wrong! You didn't read my page did you?")
        break
    } else if(birthplace == "no" || birthplace == "n"){
        alert("Correct! Andalucia all the way!")
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
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        education = prompt("Did I move schools often?".toLowerCase())
    }

    let experience = prompt("Did I work for CMR Surgical?".toLowerCase())
    while(true)
    if (experience == "yes" || experience == "y"){
        alert("Correct!")
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
        break
    } else if(goal == "no" || goal == "n"){
        alert("Is this not everyones goal?")
        // console.log("Wrong!")
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        goal = prompt("Is my goal to make this world a better place? ".toLowerCase())
    }
    let random = prompt("Bit of a random one! Do I play 7 instruments?".toLowerCase())
    while(true)
    if (random == "yes" || random == "y"){
        alert("Wrong! Who do you think I am??? I only play 6!")
        // console.log("Wrong!")
        break
    } else if(random == "no" || random == "n"){
        alert("I only play 6...")
        break
    } else{
        alert("You had been warned... Minus 1 point for you! keep up the good work and you will win the record for biggest (L)")
        random = prompt("Bit of a random one! Do I play 7 instruments?".toLowerCase())
    }
    alert("Amazing " + user + " you have completed the quiz!")
}
