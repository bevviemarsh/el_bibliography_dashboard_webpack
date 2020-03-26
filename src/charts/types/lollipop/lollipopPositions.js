import { chartsParams } from "../../../elements/graphBuilders";
import { chartsDeviations } from "../../../elements/chartsDeviations";
import { calculatedGraphHeight } from "../../../elements/svgParams";

const { graphMargin, translate } = chartsParams;

export const lollipopPosition = translate(
  graphMargin.left,
  chartsDeviations.lollipopDeviations.chartPositionDeviation
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
