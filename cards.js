let cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//shuffle cards
function shuffleNumber() {
    let i = cardValue.length - 1;
    for (i; i >= 0; i--) {
        let randomVal = Math.floor(Math.random() * (i + 1));
        let itemVal = cardValue[randomVal];
        cardValue[randomVal] = cardValue[i];
        cardValue[i] = itemVal;
        document.getElementById("ShuffleBox").children[i].innerText = cardValue[i];
    }

    return cardValue;
}

//sort cards by bubble sorting
function sortNumber() {
    let arrLen = cardValue.length;

    for (let i = 0; i < arrLen; i++) {
        for (let j = 0; j < arrLen; j++) {
            if (cardValue[j] > cardValue[j + 1]) {
                let temp = cardValue[j];
                cardValue[j] = cardValue[j + 1];
                cardValue[j + 1] = temp;
            }
        }
    }

    for (let k = 0; k < arrLen; k++) {
        document.getElementById("ShuffleBox").children[k].innerText = cardValue[k];
    }

    return cardValue;
}



