/* Crown and Anchor game */

function rand(m, n) {
    return Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0,5)];
}

let funds = 50; //시작 조건
let round = 0;

while(funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    //돈을 겁니다.
    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
    let totalBet = rand(1, funds);


    /*
    switch(totalBet) {
        case 7:
            totalBet = funds;
            break;
        case 13:
            funds = funds - 1;
        case 11:
            totalBet = 0;
            break;
        case 21:
            totalBet = 21;
            break;

        default:
            console.log("No superstition here!");
            break;
    }
    */
    
    if(totalBet === 7) {
        console.log('All pence bets heart... Feeling so lucky');
        totalBet = funds;
        bets.heart = totalBet;
        continue;
    } else if(totalBet == 13){
        console.log("Unlucky! Skip this round...")
        continue;
    } else {
    //판돈을 나눕니다.
    let remaining = totalBet;

    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;

    }
    funds = funds - totalBet;
    
    console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]}pence`).join(', ') + ` (total: ${totalBet}pence)`);
    
    const hand = [];
    for(let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(',')}`);

    //딴 돈을 가져옵니다.
    let winnings = 0;
    for(let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

