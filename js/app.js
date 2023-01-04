for (var x=1; x<5; x++ ){

    var guessGame = parseInt(prompt("enter your value: "));
 
    var Math = Math.floor(Math.random()*5 + 1);
  
    if(guessGame == Math){
      console.log("you win this match");
    }
    else{
     console.log("you lose this match");
    }
 
 }
 