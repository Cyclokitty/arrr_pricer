module.exports = {
  pricer: function (cost, staff, materials) {
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
}
