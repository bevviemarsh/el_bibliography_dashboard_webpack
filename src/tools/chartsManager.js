export const chartsManager = {
  getFormattedYear: d => Number(d.year.slice(5)),
  getElementsHigherThanOne: arr => arr.filter(item => item.value > 1),
  getAndCountElementsLowerThenOne: arr =>
    arr
      .filter(item => item.value <= 1)
      .map(item => item.value)
      .reduce((acc, currVal) => acc + currVal)
};
