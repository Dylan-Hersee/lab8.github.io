function check(){
    
    var name;
    name=prompt("Please choose between Rock, Paper or Scissors?");


    if(name=="Rock"){
        alert("You chose Rock, Computer chose Scissors. You Win!");
    }
    
   else if(name=="Scissors"){
        alert("You chose Scissors, Computer chose Scissors. Draw! ");

    }
    else if(name=="Paper"){
       alert("You chose Paper, Computer chose Scissors. You Lose!");
    }
    else{
        alert("Invalid Input, Try Again");
    }

}
