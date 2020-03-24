import {
  xCircularAxisGenerator,
  yCircularAxisGenerator
} from "../../tools/axesGenerator";
import { selectionParams } from "../../elements/selectionParams";
import { circularBarPlotData } from "../../dataTools/dataForGraphs";
import { chartsParams } from "../../elements/graphBuilders";
import { chartsManager } from "../../tools/chartsManager";
import { getItemByProperty } from "../../dataTools/dataHelpers";
import { PROPERTY_CITY, PROPERTY_VALUE } from "../../elements/dataProperties";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../../elements/svgParams";

const { scaleBand, scaleRadial } = selectionParams;
const { circularBarInnerRadius, circularBarOuterRadius } = chartsParams;
const { getMaximumElementFromData } = chartsManager;

export const xCircular = xCircularAxisGenerator(
  scaleBand(),
  [0, 2 * Math.PI],
  [...circularBarPlotData.map(item => getItemByProperty(item, PROPERTY_CITY))]
);

export const yCircular = yCircularAxisGenerator(
  scaleRadial(),
  [
    circularBarInnerRadius,
    circularBarOuterRadius(calculatedGraphWidth, calculatedGraphHeight)
  ],
  [
    0,
    getMaximumElementFromData(
      circularBarPlotData,
      getItemByProperty,
      PROPERTY_VALUE
    )
  ]
);
