const ages = [21, 27, 26, 23];
const ages2 = [15, 12, 13, 19];
const ages3 = [25, 22, 23, 29];

const allAges = ages.concat(ages2).concat([10]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
const maximum = Math.max(...allAges2);

console.log(allAges2);
console.log('The most older person age is ',maximum);
