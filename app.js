let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

//for alternate turn
let turnO = true; //playerX, playerY
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log('box was clicked');
    if (turnO) { //playerO
      box.innerText = 'O';
      turnO = false;
    } else { //playerX
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;


    checkWinner();
  });
});

const checkWinner = () => {
 for (let pattern of winPattern){
  console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
 }

};
