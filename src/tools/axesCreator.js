import { xAxisGenerator, yAxisGenerator } from "./axesGenerator";
import { selectionParams } from "../elements/selectionParams";
import { lollipopData } from "../dataTools/dataForGraphs";
import { chartsParams } from "../elements/graphBuilders";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../elements/svgParams";
import { chartsManager } from "./chartsManager";
import { getItemByProperty } from "../dataTools/dataHelpers";
import { PROPERTY_GENRE, PROPERTY_VALUE } from "../elements/dataProperties";

const { scaleLinear, scaleBand, axisBottom, axisLeft } = selectionParams;
const { graphMargin } = chartsParams;
const { getMaximumElementFromData } = chartsManager;

export const xAxisLollipop = xAxisGenerator(
  scaleLinear(),
  [
    null,
    getMaximumElementFromData(lollipopData, getItemByProperty, PROPERTY_VALUE)
  ],
  [graphMargin.right, calculatedGraphWidth - graphMargin.left]
);
export const bottomAxisLollipop = axisBottom(xAxisLollipop);

export const yAxisLollipop = yAxisGenerator(
  scaleBand(),
  [...lollipopData.map(item => getItemByProperty(item, PROPERTY_GENRE))],
  [graphMargin.left, calculatedGraphHeight]
);
export const leftAxisLollipop = axisLeft(yAxisLollipop);
