// Code your solutions in this file
function writeCards(names, type) {

  let messages = [];

  let i = 0;
  for( let i = 0; i < names.length; i += 1 ) {
    let message = "Thank you, " + names[i] + ", for the wonderful " + type + " gift!";
    messages.push(message);
  }

  return messages;

}

function countdown(count) {
  let times = count;
  while(times >= 0) {
    console.log(times);
    times -= 1;
  }
}
