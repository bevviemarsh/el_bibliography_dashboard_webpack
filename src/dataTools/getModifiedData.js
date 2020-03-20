import data from "../data/bibliography.json";
import {
  PROPERTY_CITY,
  PROPERTY_GENRE,
  PROPERTY_PUBLISHER,
  PROPERTY_YEAR,
  PROPERTY_OTHERS
} from "../elements/dataProperties";

const getItemByProperty = (item, property) => item[property];

const getDataByProperty = (arr, getItem, propertyName) =>
  arr.reduce((acc, el) => {
    if (!getItem(el, propertyName)) return acc;
    return [...acc, getItem(el, propertyName)];
  }, []);

const getAdditionalData = (arr, getItem, propertyName) =>
  arr.find(item => getItem(item, propertyName))[propertyName];

function getPreparedData(data) {
  const additionalData = getAdditionalData(
    data,
    getItemByProperty,
    PROPERTY_OTHERS
  );

  const dataCities = getDataByProperty(
    data,
    getItemByProperty,
    PROPERTY_CITY
  ).concat(getDataByProperty(additionalData, getItemByProperty, PROPERTY_CITY));

  const dataGenres = getDataByProperty(
    data,
    getItemByProperty,
    PROPERTY_GENRE
  ).concat(
    getDataByProperty(additionalData, getItemByProperty, PROPERTY_GENRE)
  );

  const dataPublishers = getDataByProperty(
    data,
    getItemByProperty,
    PROPERTY_PUBLISHER
  ).concat(
    getDataByProperty(additionalData, getItemByProperty, PROPERTY_PUBLISHER)
  );

  return { dataCities, dataGenres, dataPublishers };
}

function getCountedDataYears(data, propertyName) {
  const allPeriods = [];

  const mainData = data;
  const additionalData = getAdditionalData(
    data,
    getItemByProperty,
    PROPERTY_OTHERS
  );

  const mainYears = getDataByProperty(
    mainData,
    getItemByProperty,
    PROPERTY_YEAR
  );
  const additionalYears = getDataByProperty(
    additionalData,
    getItemByProperty,
    PROPERTY_YEAR
  );

  const allYears = mainYears.concat(additionalYears);
  const minYear = Math.floor(Math.min(...allYears) / 10) * 10;
  const maxYear = Math.round(Math.max(...allYears) / 10) * 10;

  const getPeriods = (data, firstYear, secondYear) => {
    const addFilteredPeriod = item => {
      if (
        getItemByProperty(item, propertyName) > firstYear &&
        getItemByProperty(item, propertyName) <= secondYear
      ) {
        allPeriods.push(`${firstYear}-${secondYear}`);
      }
    };

    data.forEach(item => addFilteredPeriod(item));
    getAdditionalData(data, getItemByProperty, PROPERTY_OTHERS).forEach(item =>
      addFilteredPeriod(item)
    );

    if (firstYear === maxYear) return;
    firstYear += 10;
    return getPeriods(data, firstYear, secondYear + 10);
  };
  getPeriods(data, minYear, minYear + 10);

  return allPeriods;
}

export const { dataCities, dataGenres, dataPublishers } = getPreparedData(
  data,
  PROPERTY_GENRE
);
export const allPeriods = getCountedDataYears(data, PROPERTY_YEAR);
