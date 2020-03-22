export const getItemByProperty = (item, property) => item[property];

export const filterDataHigherThenOne = (item, property) => item[property] > 1;
export const filterDataLowerThenOne = (item, property) => item[property] <= 1;

export const sortDataByProperty = (firstItem, secondItem, property) =>
  firstItem[property] - secondItem[property];

export const getDataByProperty = (arr, filterItem, getItem, propertyName) =>
  arr.reduce((acc, el) => {
    if (!filterItem(el, propertyName)) return acc;
    return [...acc, getItem(el, propertyName)];
  }, []);

export const getAdditionalData = (arr, getItem, propertyName) =>
  arr.find(item => getItem(item, propertyName))[propertyName];
