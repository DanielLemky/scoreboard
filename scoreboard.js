var side1Name = "Player 1";
var side2Name = "Player 2";
var side1Score = 0;
var side2Score = 0;


function updateScores() {
    document.getElementById("side1Score").innerHTML = side1Score;
    document.getElementById("side2Score").innerHTML = side2Score;
}


function reset() {
    side1Score = 0;
    side2Score = 0;
    updateScores();
}
  
  
function changeName1() {
  var player = this.innerHTML;
  var message = "Enter new name for " + player;
  var newName = prompt(message);
  if (newName == "" || !newName) {
    newName = player;
  }
  side1Name = newName;
  this.innerHTML = side1Name;
}


function changeName2() {
  var player = this.innerHTML;
  var message = "Enter new name for " + player;
  var newName = prompt(message);
  if (newName == "" || !newName) {
    newName = player;
  }
  side2Name = newName;
  this.innerHTML = side2Name;
}


function side1Add() {
  side1Score = side1Score + 1;
  updateScores();
  document.getElementById("side1Score").classList.add('glow');
    var delayInMilliseconds = 1000; //1 second
      setTimeout(function() {
        document.getElementById("side1Score").classList.remove('glow');
      }, delayInMilliseconds);
}


function side2Add() {
  side2Score = side2Score + 1;
  //document.getElementById("side2Score").innerHTML = side2Score;
  updateScores();
  document.getElementById("side2Score").classList.add('glow');
    var delayInMilliseconds = 1000; //1 second
      setTimeout(function() {
        document.getElementById("side2Score").classList.remove('glow');
      }, delayInMilliseconds);
}


function side1Minus() {
    if (side1Score > 0) {
        side1Score = side1Score - 1;
    } else if (side1Score === 0) {
        document.getElementById("side1Score").style.color ="#000";
        var delayInMilliseconds = 200; //1 second
        setTimeout(function() {
          document.getElementById("side1Score").style.color ="#fff";
        }, delayInMilliseconds);
      }
    updateScores();
}


function side2Minus() {
    if (side2Score > 0) {
        side2Score = side2Score - 1;
    } else if (side2Score === 0) {
        document.getElementById("side2Score").style.color ="#000";
        var delayInMilliseconds = 200; //1 second
        setTimeout(function() {
          document.getElementById("side2Score").style.color ="#fff";
        }, delayInMilliseconds);
      }
    updateScores();
}



$(document).ready(function() {
  document.getElementById("side1Name").innerHTML = side1Name;
  document.getElementById("side2Name").innerHTML = side2Name;
  document.getElementById("side1Score").innerHTML = side1Score;
  document.getElementById("side2Score").innerHTML = side2Score;
  
  
  //CONTROLS: KEYBOARD ENTRY
  $(document).keypress(function(event) {
    
    //SIDE 1: MINUS POINT
    if (event.keyCode == 100) {
      side1Minus();
      
    //SIDE 1: ADD POINT  
    } else if (event.keyCode == 102){
      side1Add();
        
    //SIDE 2: MINUS POINT
    } else if (event.keyCode == 107){
      side2Minus();
    
    //SIDE 2: ADD POINT
    } else if (event.keyCode == 106){
      side2Add();
        
    //SWAP SIDES
    } else if (event.keyCode == 98){
        var tmp = side1Score;
        side1Score = side2Score;
        side2Score = tmp;
        tmp = side1Name;
        side1Name = side2Name;
        side2Name = tmp;

        document.getElementById("side1Name").innerHTML = side1Name;
        document.getElementById("side2Name").innerHTML = side2Name;
        updateScores();
    }
  })

  document.getElementById("side1Name").addEventListener("click", changeName1);
  document.getElementById("side2Name").addEventListener("click", changeName2);
  
  document.getElementById("side1Add").addEventListener("click", side1Add);
  document.getElementById("side2Add").addEventListener("click", side2Add);
  document.getElementById("side1Minus").addEventListener("click", side1Minus);
  document.getElementById("side2Minus").addEventListener("click", side2Minus);
})