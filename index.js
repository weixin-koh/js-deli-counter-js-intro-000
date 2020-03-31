function takeANumber(line, name) {
  var number = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}
