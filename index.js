function takeANumber(line, name) {
  var number = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }

  return `${line.shift()}`;
}