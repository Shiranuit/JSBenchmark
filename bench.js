const microtime = require('microtime');
const fs = require('fs');
const Rand = require('rand-seed').default;
const assert = require('assert');

if (process.argv.length < 3) {
  console.log('Usage: node bench.js <benchmark>');
  process.exit(1);
}

const folder = process.argv[2];

const files = fs.readdirSync(folder);

if (!files.includes('config.js')) {
  console.log('No config.js found in folder');
  process.exit(1);
}

const config = require(`${folder}/config.js`);

const csv = Boolean(process.argv[3]);

if (csv) {
  console.log('File,Size,Time');
}

const seeds = {};
const results = {};

for (const file of files.filter(file => file !== 'config.js' && file.endsWith('.js'))) {
  const benchmark = require(`${folder}/${file}`);
  

  for (let i = config.start; i <= config.end; i = config.step(i)) {
    if (!seeds[i]) {
      seeds[i] = (Math.random() * 9999999).toString();
    }

    let average = 0;
    for (let j = 0; j < config.averageRun; j++) {
      const instance = new benchmark(i, new Rand(seeds[i]));
      const start = microtime.now();
      instance.run();
      const end = microtime.now();
      average += (end - start);
    }
    average /= config.averageRun;
    if (csv) {
      console.log(`${file},${i},${average}`);
    } else {
      console.log(`${i} - ${file}: ${average}µs`);
    }

    const instance = new benchmark(i, new Rand(seeds[i]));
    if (!results[i]) {
      results[i] = instance.run();
    } else {
      const result = instance.run();
      assert.deepEqual(result, results[i]);     
    }
  }
}