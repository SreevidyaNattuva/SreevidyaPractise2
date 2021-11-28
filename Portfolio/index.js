var readlineSync = require('readline-sync');

var queAndAns = [
    {question : "Is my Surname, Nattuva? ",
     answer : "yes"},
    {question : "When is my birthday? Is it in January? ",
     answer : "yes"},
    {question : "Do I live in Chennai? ",
     answer : "no"},
    {question : "Do I like Anime? ",
     answer : "yes"},
    {question : "Do I like to sleep in my freetime? ",
     answer : "no"}
 ];

 function gamePlay(question, answer){
     var score = 0;
     var ans = readlineSync.question(question);
     if(ans.toUpperCase === answer.toUpperCase){
         score = score+1;
       console.log("You know me well buddy" + "Your Current Score is"+ score);
     }
    else{
        score = score - 1;
        console.log("Oops!!! You missed it" + "Your Current Score is"+ score);
    }
    return score;
 }


 for(var i=0 ; i < queAndAns.length; i++)
 {
    var score = gamePlay(queAndAns[i].question, queAndAns[i].answer);
 }


