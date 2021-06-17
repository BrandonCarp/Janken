// Buttons
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');


// Victory Output
let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let outCome = document.querySelector('.outCome');



const choice = ['rock', 'paper', 'scissor'];
// let random = choice[Math.floor(Math.random() * choice.length)];
// let computerChoice = random;    
let random;
let computerChoice;

rock.addEventListener('click', function() {
 random = choice[Math.floor(Math.random() * choice.length)];
 computerChoice = random;  
  if(computerChoice === 'rock') {
    player.innerText = 'You Choose Rock';
    computer.innerText = 'The Computer Choose Rock';
    outCome.innerText = 'Its a Draw!';
  } else if(computerChoice === 'paper') {
    player.innerText = 'You Choose Rock';
    computer.innerText = 'The Computer Choose Paper';
    outCome.innerText = 'The Computer Wins!';
  } else {
    player.innerText = 'You Choose Rock';
    computer.innerText = 'The Computer Choose Scissors';
    outCome.innerText = 'You Win!';
  }
});

paper.addEventListener('click', function() {
  random = choice[Math.floor(Math.random() * choice.length)];
  computerChoice = random; 
 if(computerChoice === 'paper') {
   player.innerText = 'You Choose Paper';
   computer.innerText = 'The Computer Choose Paper';
   outCome.innerText = 'Its a Draw!';
 } else if(computerChoice === 'scissor') {
   player.innerText = 'You Choose Paper';
   computer.innerText = 'The Computer Choose Scissors';
   outCome.innerText = 'The Computer Wins!';
 } else {
   player.innerText = 'You Choose Paper';
   computer.innerText = 'The Computer Choose rock';
   outCome.innerText = 'You Win!';
 }
});


scissor.addEventListener('click', function() {
  random = choice[Math.floor(Math.random() * choice.length)];
  computerChoice = random; 
 if(computerChoice === 'scissor') {
   player.innerText = `You Choose Scissors`;
   computer.innerText = 'The Computer Choose Scissors';
   outCome.innerText = 'Its a Draw!';
 } else if(computerChoice === 'rock') {
   player.innerText = 'You Choose Scissors';
   computer.innerText = 'The Computer Choose Rock';
   outCome.innerText = 'The Computer Wins!';
 } else {
   player.innerText = 'You Choose Scissors';
   computer.innerText = 'The Computer Choose Paper';
   outCome.innerText = 'You Win!';
 }
});









