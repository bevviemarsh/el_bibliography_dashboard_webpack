import { chartsParams } from "./graphBuilders";

const { graphMargin } = chartsParams;

export const chartsDeviations = {
  lollipopDeviations: {
    chartPositionDeviation: {
      horizontalParam: graphMargin.left * 2,
      verticalParam: graphMargin.top * 1.5
    },
    yPositionDeviation: -0.7,
    labelsDeviation: 3.5
  },
  circularBarPlotDeviations: {
    chartPositionDeviation: {
      horizontalParam: graphMargin.right * 3,
      verticalParam: graphMargin.bottom * 1.7
    },
    labelPositionDeviation: 5
  },
  pieChartDeviations: {
    chartPositionDeviation: {
      horizontalParam: graphMargin.right * 3,
      verticalParam: graphMargin.bottom * 1.5
    },
    labelsAndPolylinesDeviation: {
      outerArcParams: {
        innerRadius: 1.5,
        outerRadius: 1.1
      },
      midAngleParam: 1.3
    }
  },
  lineChartDeviations: {
    lineChartHorizontalParam: graphMargin.top * 3,
    lineChartDataYearDeviationForXAxes: 10
  }
};
