const start = BigInt(process.argv[2] || '4');
console.log(`following the sequence starting at ${start}`);
console.log(start);

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

console.log(`${count} numbers in this sequence`);
