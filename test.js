const start = BigInt(process.argv[2] || '4');
console.log(`following the sequence starting at ${start}\n`);
console.log(start.toString());

// iterate through the sequence
let count = 1n;
let x = start;
for (; x !== 1n; ++count) {
  if (x % 2n === 0n) {
    x /= 2n;
  } else { 
    x = 3n * x + 1n;
  }
  console.log(x.toString());
}

console.log(`\n${count} numbers in this sequence`);
