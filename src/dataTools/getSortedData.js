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
} from "./getModifiedData";

function getCountedAndSortedData(dataToCount, propertyName) {
  const sortDataByProperty = (a, b, property) => a[property] - b[property];

  const countedMainData = dataToCount.reduce((allProperties, property) => {
    property in allProperties
      ? allProperties[property]++
      : (allProperties[property] = 1);

    return allProperties;
  }, {});

  const sortedMainData = Object.keys(countedMainData)
    .map(key => ({
      [propertyName]: String(key),
      value: countedMainData[key]
    }))
    .sort((a, b) => sortDataByProperty(a, b, PROPERTY_VALUE));

  return sortedMainData;
}

export const sortedDataForCircular = getCountedAndSortedData(
  dataCities,
  PROPERTY_CITY
);

export const sortedDataForLollipop = getCountedAndSortedData(
  dataGenres,
  PROPERTY_GENRE
);

export const sortedDataForPieChart = getCountedAndSortedData(
  dataPublishers,
  PROPERTY_PUBLISHER
);

export const sortedDataForLineGraph = getCountedAndSortedData(
  allPeriods,
  PROPERTY_YEAR
);
