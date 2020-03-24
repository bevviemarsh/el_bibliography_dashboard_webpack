export const xAxisGenerator = (scaleType, domainArray, rangeArray) =>
  scaleType.domain(domainArray).range(rangeArray);

export const yAxisGenerator = (scaleType, domainArray, rangeArray) =>
  scaleType.domain(domainArray).range(rangeArray);

export const xCircularAxisGenerator = (scaleType, rangeArray, domainArray) =>
  scaleType.range(rangeArray).domain(domainArray);

export const yCircularAxisGenerator = (scaleType, rangeArray, domainArray) =>
  scaleType.range(rangeArray).domain(domainArray);
