// Buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

// Victory Output
let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let outCome = document.querySelector('outCome');


// What is needed
// On click set math.random() maybe floor
// To each button , * 3 I think?
// Set up outcomes for each
// Possibly able to use switch statements
// Out comes set in vars
// Vars used to output user/pc/victor

rock.addEventListener('click', rockClick);
// paper.addEventListener('click', paperClick);
// scissor.addEventListener('click', scissorClick);

function rockClick(e) {
  player = Math.random() * 3;
  console.log(player);
}



