const Planetas = {
  mercury: {
    diameter: 3100,
    distanceFromSun: 36,
    timeToOrbit: '88 days',
    timeToRotate: '59 days'
  },
  venus: {
    diameter: 7700,
    distanceFromSun: 67,
    timeToOrbit: '225 days',
    timeToRotate: '244 days'
  },
  earth: {
    diameter: 7920,
    distanceFromSun: 93,
    timeToOrbit: '365 days',
    timeToRotate: '24 hrs'
  },
  mars: {
    diameter: 4200,
    distanceFromSun: 141,
    timeToOrbit: '687 days',
    timeToRotate: '24 hrs 24 mins'
  },
  jupiter: {
    diameter: 88640,
    distanceFromSun: 483,
    timeToOrbit: '11.9 years',
    timeToRotate: '9hrs 50 mins'
  },
  saturn: {
    diameter: 74500,
    distanceFromSun: 886,
    timeToOrbit: '29.5 years',
    timeToRotate: '10 hrs 39 mins'
  },
  uranus: {
    diameter: 32000,
    distanceFromSun: 1782,
    timeToOrbit: '84 years',
    timeToRotate: '23 hrs'
  },
  neptune: {
    diameter: 31000,
    distanceFromSun: 2793,
    timeToOrbit: '165 days',
    timeToRotate: '15 hrs 48 mins'
  },
  pluton: {
    diameter: 1500,
    distanceFromSun: 3670,
    timeToOrbit: '248 years',
    timeToRotate: '6 days 7 hrs'
  },
  distanceTwoPlanets: (planetA, planetB) => Math.abs(planetA.distanceFromSun - planetB.distanceFromSun)
}

console.log(`${Planetas.distanceTwoPlanets(Planetas.mars, Planetas.mars).toFixed(2)} Millons of Miles`)