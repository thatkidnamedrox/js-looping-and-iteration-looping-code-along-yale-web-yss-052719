// Code your solutions in this file
function writeCards(names) {
  let messages = [];
  while(names) {
    let message = "Thank you, " + names[0] + ", for the wonderful suprise gift!";
    messages.push(message);
    names.shift();
  }
  return messages;
}
