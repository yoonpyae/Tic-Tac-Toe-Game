let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      checkWin();
      checkDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
    if (turn === "X") {
      turn = "O";
      document.querySelectorAll(".background")[0].style.opacity = "1";
      document.querySelectorAll(".background")[1].style.opacity = "0";
    } else {
      turn = "X";
      document.querySelectorAll(".background")[0].style.opacity = "0";
      document.querySelectorAll(".background")[1].style.opacity = "1";
    }
  }

function checkWin() {
  let winContainer = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < winContainer.length; i++) {
    let vo = boxes[winContainer[i][0]].innerHTML;
    let v1 = boxes[winContainer[i][1]].innerHTML;
    let v2 = boxes[winContainer[i][2]].innerHTML;

    if (vo != "" && vo === v1 && vo === v2) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = turn + " win!";
      document.querySelector("#play-again").style.display = "inline";

      for (j = 0; j < 3; j++) {
        boxes[winContainer[i][j]].style.backgroundColor = "#08d9d6";
        boxes[winContainer[i][j]].style.color = "#0000";
      }
    }
  }
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach(e => {
      if (e.innerHTML === "") isDraw = false;
    });

    if (isDraw) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = "Draw";
      document.querySelector("#play-again").style.display = "inline";
    }
  }
}

document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false;
    turn = "X";
    document.querySelectorAll(".background")[0].style.opacity = "1";
    document.querySelectorAll(".background")[1].style.opacity = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
  
    boxes.forEach(e => {
      e.innerHTML = "";
      e.style.removeProperty("background-color");
      e.style.color = "#fff";
    });
  });
