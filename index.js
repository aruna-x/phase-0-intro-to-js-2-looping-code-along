for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    let messages = [];
    for (let i=0; i<names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return messages;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(int) {
    while(int>=0) {
        console.log(int);
        int--;
    }
    return;
}

countDown(10);