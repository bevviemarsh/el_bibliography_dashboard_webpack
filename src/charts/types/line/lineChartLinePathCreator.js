import { selectionParams } from "../../../elements/selectionParams";
import { xAxisLineChart, yAxisLineChart } from "./lineAxes";

export const linePathCreator = selectionParams.getLine(
  d => xAxisLineChart(d.year),
  d => yAxisLineChart(d.value)
);
