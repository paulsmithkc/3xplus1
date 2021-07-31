const start = BigInt(process.argv[2] || '4');
const limit = parseInt(process.argv[3] || '10');
const queue = [{cur: start, length: 0}];
const map = new Map();
console.log(`tracing back sequences ending with ${start}\n`);

while (queue.length) {
  const chain = queue.shift();
  const cur = chain.cur;

  if (!map.has(cur)) {
    map.set(cur, chain);
  } else if (map.get(cur).length > chain.length) { 
    map.set(cur, chain);
  }

  if (cur <= 1 || chain.length >= limit) {
    // stop exploring this chain
  } else {
    const a = cur * 2n;
    const b = (cur - 1n) / 3n;
    if (a % 2n === 0n) {
      queue.push({cur: a, prev: cur, length: chain.length + 1});
    }
    if (b % 2n !== 0n) {
      queue.push({cur: b, prev: cur, length: chain.length + 1});
    }
  }
}

// for (const chain of map.values()) {
//   console.log(`${chain.cur} => ${start} in ${chain.length} steps.`);
// }

const list = [];
for (const cur of map.keys()) {
  list.push(cur);
}
console.log(list.join(', '), '\n');
