// Code your solutions in this file

function writeCards(arr, specialEvent) {
    const newCards = []; 
    for (let i = 0; i < arr.length; i++) {
    let msg = `Thank you, ${arr[i]}, for the wonderful ${specialEvent} gift!`;
    newCards.push(msg);
  }
  return newCards; 
}

function countDown() {
    let startingCount = 11; 
    while (startingCount > 0) {
        console.log(--startingCount);
        // --i; 
    }
}