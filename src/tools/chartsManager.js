import { PROPERTY_VALUE } from "../elements/dataProperties";
import {
  getDataByProperty,
  getItemByProperty,
  filterDataHigherThenOne,
  filterDataLowerThenOne
} from "../dataTools/dataHelpers";

export const chartsManager = {
  clicked: true,
  getFormattedYear: d => Number(d.year.slice(5)),
  getElementsHigherThanOne: arr =>
    arr.filter(item => filterDataHigherThenOne(item, PROPERTY_VALUE)),
  getAndCountElementsLowerThenOne: arr =>
    getDataByProperty(
      arr,
      filterDataLowerThenOne,
      getItemByProperty,
      PROPERTY_VALUE
    ).reduce((acc, currVal) => acc + currVal),
  getMaximumElementFromData: (arr, getItem, property) =>
    Math.max(...arr.map(item => getItem(item, property)))
};
