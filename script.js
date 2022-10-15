let grid = document.getElementById('grid');
let message = document.querySelector('.message');
let chooser = document.querySelector('form');
let choice;
let boxes;

function Player() {
  choice = this.value;
  

  if (choice == 'X') {
    build();
    playO();
    Switch();
    checkWin();

    message.textContent = choice + ', click on a square to make your move!';
    chooser.classList.add('game-on');
    this.checked = false;

    
  }
  
  else {
  message.textContent = choice + ', click on a square to make your move!';
  chooser.classList.add('game-on');
  this.checked = false;

  build();
  checkWin();

  }
  
}

function playO() {
    let emptyboxes = [];
  let random;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent == '') {
      emptyboxes.push(boxes[i]);
    }
  }
  
 
  
  random = Math.ceil(Math.random() * emptyboxes.length) - 1;
  emptyboxes[random].textContent = 'O';
  checkWin();
  Switch();
}




function Move() {

  
    if (this.textContent == '') {
    this.textContent = choice;
    checkWin();
    Switch();
    computerTurn();
  }
}

function computerTurn() {
  let emptyboxes = [];
  let random;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent == '') {
      emptyboxes.push(boxes[i]);
    }
  }
  
 
  
  random = Math.ceil(Math.random() * emptyboxes.length) - 1;
  emptyboxes[random].textContent = choice;
  checkWin();
  Switch();
}

function Switch() {
    checkWin();
  if (choice == 'X') {
    choice = 'O';
  } else {
    choice = 'X';
  }
}

function win(a, b, c) {
  if (a.textContent == choice && b.textContent == choice && c.textContent == choice) {
    message.textContent = choice + ' wins the game!';
    a.classList.add('win');
    b.classList.add('win');
    c.classList.add('win');
    return true;
  }
  else {
    checkDraw();
  }

}

function checkWin() {
  win(document.getElementById('b1'), document.getElementById('b2'), document.getElementById('b3'));
  win(document.getElementById('b4'), document.getElementById('b5'), document.getElementById('b6'));
  win(document.getElementById('b7'), document.getElementById('b8'), document.getElementById('b9'));
  win(document.getElementById('b1'), document.getElementById('b4'), document.getElementById('b7'));
  win(document.getElementById('b2'), document.getElementById('b5'), document.getElementById('b8'));
  win(document.getElementById('b3'), document.getElementById('b6'), document.getElementById('b9'));
  win(document.getElementById('b1'), document.getElementById('b5'), document.getElementById('b9'));
  win(document.getElementById('b3'), document.getElementById('b5'), document.getElementById('b7'));
}

function checkDraw() {
    draw(document.getElementById('b1'), document.getElementById('b2'), document.getElementById('b3'), document.getElementById('b4'), document.getElementById('b5'), document.getElementById('b6'), document.getElementById('b7'), document.getElementById('b8'), document.getElementById('b9'));
    

}

function draw(a,b,c,d,e,f,g,h,i) {
    if (a.textContent != '' && b.textContent != '' && c.textContent != '' && d.textContent != '' && e.textContent != '' && f.textContent != '' && g.textContent != '' && h.textContent != '' && i.textContent != '') {
        message.textContent = 'It\'s a draw!';
        return true;
    }
}





function reset() {
  choice = 'X';
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = '';
    boxes[i].classList.remove('win');
  }
 
  message.textContent = 'Choose your player:';
  chooser.classList.remove('game-on');
  grid.innerHTML = '';
}

function build() {
  for (let i = 1; i <= 9; i++) {
    let box = document.createElement('li');
    box.id = 'b' + i;
    box.addEventListener('click', Move, false);
    grid.appendChild(box);
  }
  
  boxes = Array.prototype.slice.call(grid.getElementsByTagName('li'));
}

let players = Array.prototype.slice.call(document.querySelectorAll('input[name=player-choice]'));
players.forEach(function(choice){
  choice.addEventListener('click', Player, false);
});

let resetButton = chooser.querySelector('button');
resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  reset();
});