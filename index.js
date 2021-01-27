var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+ randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ randomNumber2 + ".png");

var player1 = prompt("Enter name of player1");
var player2 = prompt("Enter name of player2");

document.querySelector(".player1").textContent = player1;
document.querySelector(".player2").textContent = player2;

var displayText;

if(randomNumber1 > randomNumber2){
  displayText = "🚩 " + player1 + " Wins!";
}

else if(randomNumber1 < randomNumber2){
  displayText = "🚩 " + player2 + " Wins!";
}

else{
  displayText = "Draw!";
}

document.querySelector("h1").textContent = displayText;
