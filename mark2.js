var readlineSync = require('readline-sync');
    console.log("Hi!!!Welcome to Game Of Thrones quiz !!!");
    var userName = readlineSync.question("Please, Enter your name ");
    console.log("Hello " + userName+ "!!!"+" Kindly enter your answers in yes or no format");
    var queAndAns = [
        {question : "Is Cersi a Lannister? ",
         answer : "yes"},
        {question : "Will Jon Snow dies in attack by Night's watch brothers ? ",
         answer : "no"},
        {question : "Is Ned Stark, Jon Snow's biological father? ",
         answer : "no"},
        {question : "Will jon snow kills Daenerys Targaryen? ",
         answer : "yes"},
        {question : "Will Sansa marry Ramsay Bolton? ",
         answer : "yes"}
     ];
    var score = 0;
    var currentScore = 0;
     function gamePlay(question, answer){
         var ans = readlineSync.question(question);
         if(ans.toUpperCase() === answer.toUpperCase()){
             score = score+1;
           currentScore = score;
          console.log("Correct!!!Obviously you are GOT fan "+ "Your Current Score is "+ currentScore);
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