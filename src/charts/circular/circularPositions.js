import { chartsParams } from "../../elements/graphBuilders";
import { chartsDeviations } from "../../elements/chartsDeviations";

const { translate } = chartsParams;
const { circularBarPlotDeviations } = chartsDeviations;

export const circularPosition = translate(
  circularBarPlotDeviations.chartPositionDeviation.horizontalParam,
  circularBarPlotDeviations.chartPositionDeviation.verticalParam
);

export const getCircularLabelsPositions = (x, y, value1, value2) => `rotate(
  ${((x(value1) + x.bandwidth() / 2) * 180) / Math.PI - 90}) translate(${y(
  value2
) + circularBarPlotDeviations.labelPositionDeviation},0)`;
