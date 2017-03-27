const yargs = require('yargs');
const randomPick = require('unique-random-array');
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

  console.log(pirateTalk() + pricer(cost,staff,materials));

  function pricer(cost, staff, materials) {
    let flatRate = 0.05;
    let staffRate = 0.012;
    let materialRate;
    let total;

    if (materials === 'pharmaceuticals' || materials === 'drugs') {
      materialRate = 0.075;
    } else if (materials === 'food') {
      materialRate = 0.13;
    } else if (materials === 'electronics') {
      materialRate = 0.02;
    } else {
      materialRate = 0;
    }

    flatMarkup = cost + (cost * flatRate);
    total = (flatMarkup + (flatMarkup * (staff * staffRate)) + (flatMarkup * materialRate)).toFixed(2);

    return `yer booty is $${total} in dubloons!` ;
  }
