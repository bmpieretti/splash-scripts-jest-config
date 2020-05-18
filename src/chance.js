const Chance = require('chance');
const crypto = require('crypto');
let { chance } = global;

if (!chance) {
  const seed = process.env.SEED || crypto
    .createHash('md5')
    .update(new Date().toISOString())
    .digest('hex');

  // eslint-disable-next-line no-console
  console.log(`Setting up ChanceJS with seed: ${seed}`);

  chance = new Chance(seed);
  global.chance = chance;
}

module.exports = chance;
