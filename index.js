const yargs = require('yargs');
const randomPick = require('unique-random-array');
const price = require('./pricer');
const piratePhrase = require('./pirate.json');

const argv = yargs
  .options({
    p: {
      demand: true,
      describe: 'Price',
      alias: 'price',
      number: true
    },
    s: {
      demand: true,
      describe: 'Number of staff needed for job',
      alias: 'staff',
      number: true
    },
    m: {
      demand: true,
      describe: 'Type of merchandise',
      alias: 'material',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  let cost = argv.p;
  let staff = argv.s;
  let materials = argv.m;

  let pirateTalk = randomPick(piratePhrase);

  console.log(pirateTalk() + "yer booty is $" + price.pricer(cost,staff,materials) + " in dubloons!");
