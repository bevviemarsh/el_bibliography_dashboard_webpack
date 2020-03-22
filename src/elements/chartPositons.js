import { chartsParams } from "./graphBuilders";
import { chartsDeviations } from "./chartsDeviations";
import { calculatedGraphHeight } from "./svgParams";

const { graphMargin, translate } = chartsParams;
const { lollipopDeviations } = chartsDeviations;

export const lollipopPosition = translate(
  graphMargin.left,
  lollipopDeviations.chartPositionDeviation
);

export const lollipopBottomAxisPosition = translate(0, calculatedGraphHeight);
export const lollipopLeftAxisPosition = translate(graphMargin.right, 0);

export const lollipopXPosition = (xAxis, value, margin) =>
  xAxis(value) + margin;
export const lollipopYPosition = (
  yAxis,
  value,
  margin,
  visualElement,
  deviationValue
) => yAxis(value) + margin + visualElement * deviationValue;
