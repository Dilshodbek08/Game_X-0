var elBox = document.querySelector(".box");
var elCongratulations = document.querySelector("#Congratulations");
var playerx = document.querySelector("#playerx");
var player0 = document.querySelector("#player0");
var btn = document.querySelector("#button");

var isX = true;
var arrX = [];
var arr0 = [];
var messagex = "";
var message0 = "";
var cong = "";
var gameOver = false;
var buttonRefresh = true;

btn.addEventListener("click", (e) => {
  gameOver = false;
  c1.textContent = "";
  c2.textContent = "";
  c3.textContent = "";
  c4.textContent = "";
  c5.textContent = "";
  c6.textContent = "";
  c7.textContent = "";
  c8.textContent = "";
  c9.textContent = "";
  arrX = [""];
  arr0 = [""];
  messagex = "";
  playerx.textContent = messagex;
  message0 = "";
  player0.textContent = message0;
  messageCong = "";
  elCongratulations.textContent = messageCong;
})

elBox.addEventListener("click", (e) => {
  if (gameOver) {
    return 0;
  }
  var elId = e.target.id;
  elId = elId.slice(1);
  elId = parseInt(elId, 10);

  if (isX) {
    if (e.target.textContent == "") {
      e.target.textContent = "X"
      arrX.push(elId);
      isX = !isX
    }
  } else {
    if (e.target.textContent == "") {
      e.target.textContent = "0"
      arr0.push(elId);
      isX = !isX
    }
  }

  if (
    (arrX.includes(1) && arrX.includes(2) && arrX.includes(3)) ||
    (arrX.includes(4) && arrX.includes(5) && arrX.includes(6)) ||
    (arrX.includes(7) && arrX.includes(8) && arrX.includes(9)) ||
    (arrX.includes(1) && arrX.includes(5) && arrX.includes(9)) ||
    (arrX.includes(3) && arrX.includes(5) && arrX.includes(7)) ||
    (arrX.includes(1) && arrX.includes(4) && arrX.includes(7)) ||
    (arrX.includes(2) && arrX.includes(5) && arrX.includes(8)) ||
    (arrX.includes(3) && arrX.includes(6) && arrX.includes(9))
  ) {
    messageCong = "🎇🎉🎊Congratulations🎊🎉🎇".toUpperCase();
    elCongratulations.textContent = messageCong;
    messagex = "X player: You win🙂";
    playerx.textContent = messagex;
    message0 = "0 player: You are failad☹️";
    player0.textContent = message0;
    gameOver = true;
    buttonRefresh.refresh_page();
  }

  if (
    (arr0.includes(1) && arr0.includes(2) && arr0.includes(3)) ||
    (arr0.includes(4) && arr0.includes(5) && arr0.includes(6)) ||
    (arr0.includes(7) && arr0.includes(8) && arr0.includes(9)) ||
    (arr0.includes(1) && arr0.includes(5) && arr0.includes(9)) ||
    (arr0.includes(3) && arr0.includes(5) && arr0.includes(7)) ||
    (arr0.includes(1) && arr0.includes(4) && arr0.includes(7)) ||
    (arr0.includes(2) && arr0.includes(5) && arr0.includes(8)) ||
    (arr0.includes(3) && arr0.includes(6) && arr0.includes(9))
  ) {
    messageCong = "🎇🎉🎊Congratulations🎊🎉🎇".toUpperCase();
    elCongratulations.textContent = messageCong;
    message0 = "0 player: You win🙂";
    player0.textContent = message0;
    messagex = "X player: You are failad☹️";
    playerx.textContent = messagex;
    gameOver = true;
  }
})
