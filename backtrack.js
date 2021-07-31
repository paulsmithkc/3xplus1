const start = BigInt(process.argv[2] || '16');
const limit = parseInt(process.argv[3] || '10');
const queue = [{ cur: start, length: 0 }];
const map = new Map();
//console.log(`tracing back sequences ending with ${start}\n`);

while (queue.length) {
  const chain = queue.shift();
  const cur = chain.cur;

  if (!map.has(cur)) {
    map.set(cur, chain);
  } else if (map.get(cur).length > chain.length) {
    map.set(cur, chain);
  }

  if (chain.length >= limit) {
    // stop exploring this chain, because we have explored far enough
  } else if (cur <= 1 && chain.length > 0) {
    // stop exploring this chain, beacause we have reached the end
  } else {
    const a = cur * 2n;
    const b = (cur - 1n) / 3n;
    if (a % 2n === 0n) {
      queue.push({ cur: a, prev: cur, length: chain.length + 1 });
    }
    if (b % 2n !== 0n) {
      queue.push({ cur: b, prev: cur, length: chain.length + 1 });
    }
  }
}

// for (const chain of map.values()) {
//   console.log(`${chain.cur} => ${start} in ${chain.length} steps.`);
// }

// const list = [];
// for (const cur of map.keys()) {
//   list.push(cur);
// }
// console.log(list.join(', '), '\n');

console.log('digraph G {');
console.log('  rankdir=RL');
console.log('  ranksep=0.2');
console.log('  nodesep=0.1');
//console.log('  size="7.5,10"');
//console.log('  ratio="compress"');
console.log('  page="8.5,11"');
console.log('  pagedir=TL');
console.log('  node [shape=oval]');
for (const chain of map.values()) {
  if (chain.prev) {
    console.log(`  ${chain.cur} -> ${chain.prev}`);
  }
}
console.log('}');
