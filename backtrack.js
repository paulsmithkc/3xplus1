const start = BigInt(process.argv[2] || '4');
const limit = parseInt(process.argv[3] || '10');
const queue = [[start]];
console.log(`tracing back sequences ending with ${start}\n`);

while (queue.length) {
  const chain = queue.shift();
  const cur = chain.at(-1);
  if (cur <= 1 || chain.length >= limit) {
    // stop exploring this chain
    console.log(chain.join(', '));
  } else {
    const a = cur * 2n;
    const b = (cur - 1n) / 3n;
    if (a % 2n === 0n) {
      queue.push([...chain, a]);
    }
    if (b % 2n !== 0n) {
      queue.push([...chain, b]);
    }
  }
}
