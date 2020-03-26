import { chartsParams } from "../../../elements/graphBuilders";
import { chartsDeviations } from "../../../elements/chartsDeviations";
import { calculatedGraphHeight } from "../../../elements/svgParams";

const { translate, graphMargin } = chartsParams;
const { lineChartDeviations } = chartsDeviations;

export const lineChartPosition = translate(
  graphMargin.left,
  lineChartDeviations.lineChartHorizontalParam
);

export const lineChartBottomAxisPosition = translate(0, calculatedGraphHeight);
export const lineChartLeftAxisPosition = translate(0, 0);

export const labelLineChartYPosition = (y, value) =>
  y(value) - graphMargin.left;
