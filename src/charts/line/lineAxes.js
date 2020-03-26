import { xAxisGenerator, yAxisGenerator } from "../../tools/axesGenerator";
import { selectionParams } from "../../elements/selectionParams";
import { lineChartData } from "../../dataTools/dataForGraphs";
import { chartsParams } from "../../elements/graphBuilders";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../../elements/svgParams";
import { chartsManager } from "../../tools/chartsManager";
import { getItemByProperty } from "../../dataTools/dataHelpers";
import { PROPERTY_YEAR, PROPERTY_VALUE } from "../../elements/dataProperties";

const { scaleLinear, axisBottom, axisLeft, format } = selectionParams;
const { graphMargin } = chartsParams;
const { getMaximumElementFromData } = chartsManager;

export const xAxisLineChart = xAxisGenerator(
  scaleLinear(),
  [
    Math.min(...lineChartData.map(d => Number(d.text.slice(0, 4)))),
    getMaximumElementFromData(lineChartData, getItemByProperty, PROPERTY_YEAR)
  ],
  [null, calculatedGraphWidth]
);
export const bottomAxisLineChart = axisBottom(xAxisLineChart)
  .ticks(6)
  .tickFormat(format("d"));

export const yAxisLineChart = yAxisGenerator(
  scaleLinear(),
  [
    getMaximumElementFromData(lineChartData, getItemByProperty, PROPERTY_VALUE),
    0
  ],
  [graphMargin.left, calculatedGraphHeight]
);
export const leftAxisLineChart = axisLeft(yAxisLineChart);
