import { xAxisGenerator, yAxisGenerator } from "../../../tools/axesGenerator";
import { selectionParams } from "../../../elements/selectionParams";
import { lineChartData } from "../../../dataTools/dataForGraphs";
import { chartsParams } from "../../../elements/graphBuilders";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../../../elements/svgParams";
import { chartsManager } from "../../../tools/chartsManager";
import { getItemByProperty } from "../../../dataTools/dataHelpers";
import {
  PROPERTY_YEAR,
  PROPERTY_VALUE
} from "../../../elements/dataProperties";
import { chartsDeviations } from "../../../elements/chartsDeviations";

const { scaleLinear, axisBottom, axisLeft, format } = selectionParams;
const { graphMargin, tickSizeValue } = chartsParams;
const { getMaximumElementFromData, getMinimumElementFromData } = chartsManager;

export const xAxisLineChart = xAxisGenerator(
  scaleLinear(),
  [
    getMinimumElementFromData(lineChartData, getItemByProperty, PROPERTY_YEAR) -
      chartsDeviations.lineChartDeviations.lineChartDataYearDeviationForXAxes,
    getMaximumElementFromData(lineChartData, getItemByProperty, PROPERTY_YEAR)
  ],
  [null, calculatedGraphWidth]
);
export const bottomAxisLineChart = axisBottom(xAxisLineChart)
  .ticks(6)
  .tickSize(tickSizeValue)
  .tickFormat(format("d"));

export const yAxisLineChart = yAxisGenerator(
  scaleLinear(),
  [
    getMaximumElementFromData(lineChartData, getItemByProperty, PROPERTY_VALUE),
    0
  ],
  [graphMargin.left, calculatedGraphHeight]
);
export const leftAxisLineChart = axisLeft(yAxisLineChart).tickSize(
  tickSizeValue
);
