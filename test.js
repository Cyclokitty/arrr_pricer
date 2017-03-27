const expect = require('chai').expect;

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

  return total;
}


describe('Correct total made', () => {
  it('should equal 1591.58', () => {
    expect(pricer(1299.99, 3, 'food')).to.equal('1591.58');
  });
  it('should equal 6199.81', () => {
    expect(pricer(5432.00, 1, 'drugs')).to.equal('6199.81');
  });
  it('should equal 6199.88', () => {
    expect(pricer(12456.95, 4, 'books')).to.equal('13707.63');
  });
});
