import { chartsVisualElements, chartsParams } from "../elements/graphBuilders";
import { chartsManager } from "../tools/chartsManager";
import {
  sortedDataForCircular,
  sortedDataForLollipop,
  sortedDataForPieChart,
  sortedDataForLineGraph
} from "./sortedData";

export const circularBarPlotData = sortedDataForCircular.map((d, i) => ({
  id: i,
  city: d.city,
  value: d.value
}));

export const lollipopData = sortedDataForLollipop.map((d, i) => ({
  id: i,
  genre: d.genre,
  value: d.value,
  lineColor: chartsVisualElements.colors.lineColor,
  x1: d.value,
  x2: 0,
  y1: d.genre,
  y2: d.genre,
  cx: d.value,
  cy: d.genre,
  r: chartsParams.radius,
  circleColor: chartsVisualElements.colors.circleColor
}));

const preparedDataForPieChart = () => {
  const getElementsHigherThanOne = chartsManager.getElementsHigherThanOne;
  const getAndCountElementsLowerThenOne =
    chartsManager.getAndCountElementsLowerThenOne;

  const mainData = getElementsHigherThanOne(sortedDataForPieChart);
  const countedOthers = getAndCountElementsLowerThenOne(sortedDataForPieChart);

  const others = [countedOthers].map(d => ({
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
  r: chartsParams.lineChartRadius,
  cx: chartsManager.getFormattedYear(d),
  cy: d.value,
  text: `${d.year}: ${d.value}`
}));
