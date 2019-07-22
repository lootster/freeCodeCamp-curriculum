function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  arr.forEach(item => {
    let op = calculateOrbitalPeriod(earthRadius, item, GM);
    delete item.avgAlt;
    item.orbitalPeriod = op;
  });

  return arr;
}

module.exports = orbitalPeriod;


function calculateOrbitalPeriod(earthRadius, item, GM) {
  return Math.round(
    2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
  );
}
