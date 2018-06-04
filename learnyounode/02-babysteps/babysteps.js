var numbers = 0;

for (var key in process.argv) {
  if (key > 1) {
    numbers += parseFloat(process.argv[key]);
  }
}

console.log(numbers);
