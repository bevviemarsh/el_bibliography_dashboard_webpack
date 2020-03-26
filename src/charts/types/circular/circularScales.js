import { xAxisGenerator, yAxisGenerator } from "../../../tools/axesGenerator";
import { selectionParams } from "../../../elements/selectionParams";
import { circularBarPlotData } from "../../../dataTools/dataForGraphs";
import { chartsParams } from "../../../elements/graphBuilders";
import { chartsManager } from "../../../tools/chartsManager";
import { getItemByProperty } from "../../../dataTools/dataHelpers";
import {
  PROPERTY_CITY,
  PROPERTY_VALUE
} from "../../../elements/dataProperties";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../../../elements/svgParams";

const { scaleBand, scaleRadial } = selectionParams;
const { circularBarInnerRadius, circularBarOuterRadius } = chartsParams;

export const xCircular = xAxisGenerator(
  scaleBand(),
  [...circularBarPlotData.map(item => getItemByProperty(item, PROPERTY_CITY))],
  [0, 2 * Math.PI]
);

export const yCircular = yAxisGenerator(
  scaleRadial(),
  [
    0,
    chartsManager.getMaximumElementFromData(
      circularBarPlotData,
      getItemByProperty,
      PROPERTY_VALUE
    )
  ],
  [
    circularBarInnerRadius,
    circularBarOuterRadius(calculatedGraphWidth, calculatedGraphHeight)
  ]
);
