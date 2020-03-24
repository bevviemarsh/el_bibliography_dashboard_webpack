import { chartsParams } from "./graphBuilders";

const { graphMargin } = chartsParams;

export const chartsDeviations = {
  lollipopDeviations: {
    chartPositionDeviation: graphMargin.top * 4,
    yPositionDeviation: 1.5,
    labelsDeviation: 3.5
  },
  circularBarPlotDeviations: {
    chartPositionDeviation: {
      horizontalParam: graphMargin.right * 3.5,
      verticalParam: graphMargin.bottom * 2
    },
    labelPositionDeviation: 5
  }
};
