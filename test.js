const expect = require('chai').expect;
const yargs = require('yargs');
const price = require('./pricer');
const pirate = require('./pirate.json');

describe('Correct total made', () => {
  it('should equal 1591.58', () => {
    expect(price.pricer(1299.99, 3, 'food')).to.equal('1591.58');
  });
  it('should equal 6199.81', () => {
    expect(price.pricer(5432.00, 1, 'drugs')).to.equal('6199.81');
  });
  it('should equal 6199.88', () => {
    expect(price.pricer(12456.95, 4, 'books')).to.equal('13707.63');
  });
});

describe('Using the argv', () => {
  it('should be a string', () => {
    const argv = yargs(['--name=Captain Hook'])
      .options({
        name: {
          string: true
        }
      })
      .argv;
    expect(argv.name).to.equal('Captain Hook');
  });
  it('should contain the properties assigned', () => {
    const argv = yargs(["--price=1000", "--staff=1",  "--material=hats"])
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

    expect(argv).to.exist;
    expect(argv.p).to.equal(1000);
    expect(argv.s).to.equal(1);
    expect(argv.m).to.equal('hats');

  });
});

describe("Using the pirate.json file", () => {
  it('should be an array', () => {
    expect(pirate.constructor === Array).to.be.true;
  });
  it('should include the item "Yo-ho-ho, "', () => {
    expect(pirate).to.include("Yo-ho-ho, ");
  })
});
