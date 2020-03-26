import { selectionParams } from "../../elements/selectionParams";
import { xAxisLineChart, yAxisLineChart } from "./lineAxes";

const { getLine } = selectionParams;

export const linePathCreator = getLine(
  d => xAxisLineChart(d.year),
  d => yAxisLineChart(d.value)
);
