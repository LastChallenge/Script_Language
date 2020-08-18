"use strict";

/* Crown and Anchor game */
function rand(m, n) {
  return Math.floor((n - m + 1) * Math.random());
}

function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

var funds = 50; //시작 조건

var round = 0;

var _loop = function _loop() {
  round++;
  console.log("round ".concat(round, ":"));
  console.log("\tstarting funds: ".concat(funds, "p")); //돈을 겁니다.

  var bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0
  };
  var totalBet = rand(1, funds);

  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    //판돈을 나눕니다.
    var remaining = totalBet;

    do {
      var bet = rand(1, remaining);
      var face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }

  funds = funds - totalBet;
  console.log('\tbets: ' + Object.keys(bets).map(function (face) {
    return "".concat(face, ": ").concat(bets[face], " pence");
  }).join(',') + " (total: ".concat(totalBet, " pence)"));
  var hand = [];

  for (var roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }

  console.log("\thand: ".concat(hand.join(','))); //딴 돈을 가져옵니다.

  var winnings = 0;

  for (var die = 0; die < hand.length; die++) {
    var _face = hand[die];
    if (bets[_face] > 0) winnings = winnings + bets[_face];
  }

  funds = funds + winnings;
  console.log("\twinnings: ".concat(winnings));
};

while (funds > 1 && funds < 100) {
  _loop();
}

console.log("\tending funds: ".concat(funds));