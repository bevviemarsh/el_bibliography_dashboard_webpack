import {
  PROPERTY_GENRE,
  PROPERTY_YEAR,
  PROPERTY_VALUE,
  PROPERTY_PUBLISHER,
  PROPERTY_CITY
} from "../elements/dataProperties";
import {
  dataCities,
  dataGenres,
  dataPublishers,
  allPeriods
} from "./modifiedData";
import { sortDataByProperty } from "./dataHelpers";

function getCountedAndSortedData(dataToCount, propertyName) {
  const countedMainData = dataToCount.reduce((allProperties, property) => {
    property in allProperties
      ? allProperties[property]++
      : (allProperties[property] = 1);

    return allProperties;
  }, {});

  const sortedMainData = Object.keys(countedMainData).map(key => ({
    [propertyName]: String(key),
    value: countedMainData[key]
  }));

  return sortedMainData;
}

export const sortedDataForCircular = getCountedAndSortedData(
  dataCities,
  PROPERTY_CITY
);

export const sortedDataForLollipop = getCountedAndSortedData(
  dataGenres,
  PROPERTY_GENRE
).sort((a, b) => sortDataByProperty(b, a, PROPERTY_VALUE));

export const sortedDataForPieChart = getCountedAndSortedData(
  dataPublishers,
  PROPERTY_PUBLISHER
);

export const sortedDataForLineGraph = getCountedAndSortedData(
  allPeriods,
  PROPERTY_YEAR
);
