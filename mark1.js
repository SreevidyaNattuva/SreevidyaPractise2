var readlineSync = require('readline-sync');
    console.log("Hi!!!Welcome to how well do you know me game!!!");
    var userName = readlineSync.question("Please, Enter your name ");
    console.log("Hello " + userName+ "!!!"+" Kindly enter your answers in yes or no format");
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
    var score = 0;
    var currentScore = 0;
     function gamePlay(question, answer){
         var ans = readlineSync.question(question);
         if(ans.toUpperCase() === answer.toUpperCase()){
             score = score+1;
           currentScore = score;
          console.log("You know me well buddy!!!"+ "Your Current Score is "+ currentScore);
         }
        else{
            currentScore = score;
            console.log("Oops!!! You missed it!!! " + "Your Current Score is "+ currentScore);
        }
        return currentScore;
     }
    
    
     for(var i=0 ; i < queAndAns.length; i++)
     {
        var finalScore = gamePlay(queAndAns[i].question, queAndAns[i].answer);
     }
        var sampleHighscores =[{
          name: "Sree",
          score: "4"
        },
        {
          name:"Karthik",
          score:"3"
        }]
                                               
     for(var j=0;j<sampleHighscores.length;j++)
        {
          if(finalScore > (sampleHighscores[j].score))
        {
          //var arrIndex = 0;
          sampleHighscores[j].score =finalScore
          sampleHighscores[j].name =userName
          console.log("Congratulations!! you got new highscore")
          break;
        }}
           console.log("Checkout highscores");
            for(var j=0;j<sampleHighscores.length;j++){
              console.log(sampleHighscores[j].name +"\t" + "\t"+"\t"+sampleHighscores[j].score);
            // if(finalScore > (sampleHighscores[j].score))
            // {
            //   //var arrIndex = 0;
            // console.log(sampleHighscores[j].name +"\t" + "\t"+"\t"+sampleHighscores[j].score);
            // }
            // else{
            //   console.log(sampleHighscores[j].name +"\t" + "\t"+"\t"+sampleHighscores[j].score+"\t")
            //   }
            }