var per1, per2;
var dice;
var player1Score = 0
var player2Score = 0, player1Turn = true;

function moveCoin( coinNum, score){
  var coin = document.getElementById(coinNum)
  if(score === 0){
  coin.style.left = "475px"
  coin.style.top = "665px"
  } else{
    score -= 1
  var x = score % 10; // calculate x-coordinate based on score
  var y = Math.floor((score) / 10); // calculate y-coordinate based on score
  if ( y%2 === 0 ){
  coin.style.left = 525 + (x * 50) + "px"; // update coin position
   }
  else{
   coin.style.left = 975 - (x * 50) + "px"; // update coin position
   }
  coin.style.top = 675 -  (y * 50) + "px";
}
}

function endGame(num){
if(num === 1){
  alert("Player 1 Wins! ")
} else{
  alert("Player 2 Wins!")
}
play1.remove()
play2.remove()
play1Scr.remove()
play2Scr.remove()
dice.remove()
player1Score = 0
player2Score = 0
moveCoin("coin1", 0)
moveCoin("coin2", 0)
playGame()
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

function ladder(){
  if(player1Turn === true){
    if(player1Score === 4){
      player1Score = 25
    }else if(player1Score === 13){
      player1Score = 46
    }else if(player1Score === 33){
      player1Score = 49
    }else if(player1Score === 50){
      player1Score = 69
    }else if(player1Score === 42){
      player1Score = 63
    }else if(player1Score === 62){
      player1Score = 81
    }else if(player1Score === 74){
      player1Score = 92
    }
    moveCoin("coin1", player1Score)
    document.getElementById("play1Scr").innerHTML = player1Score
  } else {
    if(player2Score === 4){
      player2Score = 25
    }else if(player2Score === 13){
      player2Score = 46
    }else if(player2Score === 33){
      player2Score = 49
    }else if(player2Score === 50){
      player2Score = 69
    }else if(player2Score === 42){
      player2Score = 63
    }else if(player2Score === 62){
      player2Score = 81
    }else if(player2Score === 74){
      player2Score = 92
    }
    moveCoin("coin2", player2Score)
    document.getElementById("play2Scr").innerHTML = player2Score
  }

}

function snake(){
    if(player1Turn === true ){
      if(player1Score === 27){
        player1Score = 5
      }else if(player1Score === 40){
        player1Score = 3
      } else if(player1Score === 43){
        player1Score = 18
      } else if(player1Score === 54){
        player1Score = 31
      } else if(player1Score === 66){
        player1Score = 45
      } else if(player1Score === 76){
        player1Score = 58
      } else if(player1Score === 89){
        player1Score = 53
      } else if(player1Score === 99){
        player1Score = 41
      } 
      moveCoin("coin1", player1Score)
      document.getElementById("play1Scr").innerHTML = player1Score
    } 
    else {
      if(player2Score === 27){
        player2Score = 5
      }else if(player2Score === 40){
        player2Score = 3
      } else if(player2Score === 43){
        player2Score = 18
      } else if(player2Score === 54){
        player2Score = 31
      } else if(player2Score === 66){
        player2Score = 45
      } else if(player2Score === 76){
        player2Score = 58
      } else if(player2Score === 89){
        player2Score = 53
      } else if(player2Score === 99){
        player2Score = 41
      } 
      moveCoin("coin2", player2Score)
      document.getElementById("play2Scr").innerHTML = player2Score
    }
 }

function moveRaa(number){
   document.getElementById("diceButton").innerHTML = "Throw Dice"
  if(player1Turn === true){
    if(player1Score+number > 100){
      number = 0
    }
   player1Score += number;
   document.getElementById("play1Scr").innerHTML = player1Score
   document.getElementById("turnDisplay").innerHTML = "Player 2's turn"
   moveCoin("coin1", player1Score)
   if(number === 6) {
    document.getElementById("turnDisplay").innerHTML = "Player 1's turn";
   }
  } 
  else {
    if(player2Score + number > 100){
      number = 0
    }
    player2Score += number;
    document.getElementById("play2Scr").innerHTML = player2Score
    document.getElementById("turnDisplay").innerHTML = "Player 1's turn";
    moveCoin("coin2", player2Score)
    if(number === 6) {
      document.getElementById("turnDisplay").innerHTML = "Player 2's turn";
     }
  }
  
  if( player1Score === 27 || player1Score === 40 || player1Score === 43 || player1Score === 54 || player1Score === 66 || player1Score === 76 || player1Score === 89 || player1Score === 99 || player2Score === 27 || player2Score === 40 || player2Score === 43 || player2Score === 54 || player2Score === 66 || player2Score === 76 || player2Score === 89 || player2Score === 99 ) {
    snake()
  }
  if( player1Score === 4 || player1Score === 13 || player1Score === 33 ||player1Score === 50 ||player1Score === 42 || player1Score === 62 || player1Score === 74 || player1Score === 92 || player2Score === 4 || player2Score === 13 || player2Score === 33 ||player2Score === 50 ||player2Score === 42 || player2Score === 62 || player2Score === 74 || player2Score === 92  ){
    ladder()
  }
  if(player1Score === 100 || player2Score === 100 ){
     if(player1Score === 100){
      document.getElementById("turnDisplay").innerHTML = "Player 1 Wins"
      endGame(1)
     } else {
      document.getElementById("turnDisplay").innerHTML = "Player 2 Wins"
      endGame(2)
     }
  }
  if(number != 6 ){
  player1Turn = !player1Turn
  }
}


function playTime(){
     var number = Math.floor( Math.random()*6 + 1)
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
  

