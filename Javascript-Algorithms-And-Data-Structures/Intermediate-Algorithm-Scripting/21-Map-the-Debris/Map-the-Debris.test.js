const orbitalPeriod = require("./Map-the-Debris");

describe("orbitalPeriod", () => {
  it('should return [{name: "sputnik", orbitalPeriod: 86400}] ', () => {
    let result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
    expect(result).toEqual([{ name: "sputnik", orbitalPeriod: 86400 }]);
  });
  it('should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]', () => {
    let result = orbitalPeriod([
      { name: "iss", avgAlt: 413.6 },
      { name: "hubble", avgAlt: 556.7 },
      { name: "moon", avgAlt: 378632.553 }
    ]);
    expect(result).toEqual([
      { name: "iss", orbitalPeriod: 5557 },
      { name: "hubble", orbitalPeriod: 5734 },
      { name: "moon", orbitalPeriod: 2377399 }
    ]);
  });
});
