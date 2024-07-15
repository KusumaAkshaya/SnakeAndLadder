var per1, per2;
var dice;
var player1Score = 1
var player2Score = 1, player1Turn = true;

function moveCoin( coinNum, score){
  var coin = document.getElementById(coinNum);
  var x = score % 10 - 1; // calculate x-coordinate based on score
  var y = Math.floor((score) / 10); // calculate y-coordinate based on score
  if ( y%2 === 0 ){
  coin.style.left = 525 + (x * 50) + "px"; // update coin position
   }
  else{
   coin.style.left = 975 - (x * 50) + "px"; // update coin position
   }
  coin.style.top = 675 -  (y * 50) + "px";
}

function playGame(){
   document.getElementById("mainPage").style.backgroundImage = "none" 
    per1 = prompt("Enter the name of Player 1: ", "Tom")
    per2 = prompt("Enter the name of Player 2: ","Jerry")
   if(per1 != null && per2 != null && per1 != " " && per2 != " "){
    document.getElementById("playbutton").style.display = "none" 
    document.getElementById("navi").style.setProperty('display', 'none', 'important')
    document.getElementById("mainPage").style.setProperty('height','100vh')
    document.getElementById("board").style.display = "block";
    document.getElementById("board").style.backgroundSize = "500px 500px"
    startGame(per1 , per2);
   }
}

function snake(){
    if(player1Turn === true ){
      if(player1Score === 27){
        moveCoin("coin1" , 5) 
      }else if(player1Score === 40){
        moveCoin("coin1", 3)
      } else if(player1Score === 43){
        moveCoin( "coin1",18 )
      } else if(player1Score === 54){
        moveCoin("coin1", 31)
      } else if(player1Score === 66){
        moveCoin("coin1", 45)
      } else if(player1Score === 76){
        moveCoin("coin1", 58)
      } else if(player1Score === 89){
        moveCoin("coin1", 53)
      } else if(player1Score === 99){
        moveCoin("coin1",41 )
      } 
    } 
    else {
      if(player1Score === 27){
        moveCoin("coin1" , 5) 
      }else if(player1Score === 40){
        moveCoin("coin1", 3)
      } else if(player1Score === 43){
        moveCoin( "coin1",18 )
      } else if(player1Score === 54){
        moveCoin("coin1", 31)
      } else if(player1Score === 66){
        moveCoin("coin1", 45)
      } else if(player1Score === 76){
        moveCoin("coin1", 58)
      } else if(player1Score === 89){
        moveCoin("coin1", 53)
      } else if(player1Score === 99){
        moveCoin("coin1",41 )
      } 
    }
 }

function moveRaa(number){
   document.getElementById("diceButton").innerHTML = "Throw Dice"
  if(player1Turn === true){
   player1Score += number;
   document.getElementById("play1Scr").innerHTML = player1Score
   document.getElementById("turnDisplay").innerHTML = "Player 2's turn"
   moveCoin("coin1", player1Score)
  } else {
    player2Score += number;
    document.getElementById("play2Scr").innerHTML = player2Score
    document.getElementById("turnDisplay").innerHTML = "Player 1's turn";
    moveCoin("coin2", player2Score)
  }
  if( player1Score === 27 || player1Score === 40 || player1Score === 43 || player1Score === 54 || player1Score === 66 || player1Score === 76 || player1Score === 89 || player1Score === 99 || player2Score === 27 || player2Score === 40 || player2Score === 43 || player2Score === 54 || player2Score === 66 || player2Score === 76 || player2Score === 89 || player2Score === 99 ) {
    snake();
  }
  player1Turn = !player1Turn
}


function playTime(){
     var number = Math.floor( Math.random()*5 + 1)
    document.getElementById("diceButton").innerHTML = number   
    setTimeout(() => moveRaa(number, player1Turn), 2000)
}

function startGame( per1, per2 ){
    var ul = document.getElementById("list")
    var play1 = document.createElement("li")
    var play2 = document.createElement("li")
    var play1Scr = document.createElement("span")
    var play2Scr = document.createElement("span")
    play1Scr.appendChild(document.createTextNode(player1Score)) 
    play2Scr.appendChild(document.createTextNode(player2Score)) 
    play1.appendChild(document.createTextNode("Player1: " + per1 )) 
    play2.appendChild(document.createTextNode("Player2: "+ per2 )) 
    ul.appendChild(play1) 
    ul.appendChild(play2)
    play1.appendChild(play1Scr)
    play2.appendChild(play2Scr)
    play1Scr.id = "play1Scr"
    play2Scr.id = "play2Scr"
    dice = document.createElement("button")
    dice.id = "diceButton"
    dice.appendChild(document.createTextNode("throw Dice")) 
    document.getElementById("player").appendChild(dice)
    dice.addEventListener("click", playTime ) 

  }
  

