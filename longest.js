const start = BigInt(process.argv[2] || '4');
const count = BigInt(process.argv[3] || '1000');
console.log(`finding ${count*2n}+ number sequence that ends with ${start}`);

// 1 just loops back to one
if (start === 1n) return;

// iterate looking for the previous number
let x = start;
for (let i = 0n; i < count; ++i) {
  x = (4n * x + 1n) / 3n;
}

console.log(x.toString());
