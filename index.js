console.log("Number Guess Game")

var limit = 2;
var promptString = "Enter First Number Between 1 and "+limit +" :";

function guessFunc() {
  var randomnumber = Math.floor(Math.random() * (limit - 1 + 1)) + 1; 
  var guess = parseInt(prompt("Enter First Number Between 1 and "+limit +" :"));

  if(isNaN(guess)){
    console.log("Invalid Input, Please Enter a Number")
    guessFunc();
  }else if(guess<1 || guess>limit){
    console.log("Please Enter a Number Between 1 and "+ limit);
    guessFunc();
  }else{
    if(guess == randomnumber){
      console.log("You Guessed Correctly. The range has been increased");
      limit++;
      guessFunc();
    }else{
      console.log("You Guessed Wrongly. Please Try Again");
      guessFunc();
    }
  }
}

guessFunc();