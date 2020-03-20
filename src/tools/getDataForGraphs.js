import { chartsElements } from "../elements/graphBuilders";
import { chartsManager } from "./chartsManager";
import {
  sortedDataForCircular,
  sortedDataForLollipop,
  sortedDataForPieChart,
  sortedDataForLineGraph
} from "../dataTools/getSortedData";

export const circularBarPlotData = sortedDataForCircular.map((d, i) => ({
  id: i,
  city: d.city,
  value: d.value
}));

export const lollipopData = sortedDataForLollipop.map((d, i) => ({
  id: i,
  genre: d.genre,
  value: d.value,
  lineColor: chartsElements.lineColor,
  x1: d.value,
  x2: 0,
  y1: d.genre,
  y2: d.genre,
  cx: d.value,
  cy: d.genre,
  r: chartsElements.radius,
  circleColor: chartsElements.circleColor
}));

const getElementsHigherThanOne = chartsManager.getElementsHigherThanOne;
const getAndCountElementsLowerThenOne =
  chartsManager.getAndCountElementsLowerThenOne;

const preparedDataForPieChart = () => {
  const mainData = getElementsHigherThanOne(sortedDataForPieChart);
  const countedOthers = getAndCountElementsLowerThenOne(sortedDataForPieChart);

  const others = [countedOthers].map((d, i) => ({
    publisher: "Other publishers",
    value: d
  }));

  return mainData.concat(others);
};

export const pieChartData = preparedDataForPieChart().map((d, i) => ({
  id: i,
  publisher: d.publisher,
  value: d.value
}));

export const lineChartData = sortedDataForLineGraph.map((d, i) => ({
  id: i,
  year: chartsManager.getFormattedYear(d),
  value: d.value,
  r: chartsElements.radius,
  cx: chartsManager.getFormattedYear(d),
  cy: d.value,
  text: `${d.year}: ${d.value}`
}));
