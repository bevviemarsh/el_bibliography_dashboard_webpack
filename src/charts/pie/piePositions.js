import { chartsParams } from "../../elements/graphBuilders";
import { chartsDeviations } from "../../elements/chartsDeviations";
import { selectionParams } from "../../elements/selectionParams";
import { pieRadiusValue, arcPie } from "./pieParams";

const { translate } = chartsParams;
const { pieChartDeviations } = chartsDeviations;
const { arcGenerator } = selectionParams;

export const piePosition = translate(
  pieChartDeviations.chartPositionDeviation.horizontalParam,
  pieChartDeviations.chartPositionDeviation.verticalParam
);

export const getLabelsAndPolylinesPositions = () => {
  const outerArc = arcGenerator(
    pieRadiusValue *
      pieChartDeviations.labelsAndPolylinesDeviation.outerArcParams.innerRadius,
    pieRadiusValue *
      pieChartDeviations.labelsAndPolylinesDeviation.outerArcParams.outerRadius
  );
  const midangle = d => d.startAngle + (d.endAngle - d.startAngle) / 2;
  const firstPositionParams = value =>
    pieRadiusValue *
    pieChartDeviations.labelsAndPolylinesDeviation.midAngleParam *
    (midangle(value) < Math.PI ? 1 : -1);

  const getTranslatedLabels = value => {
    const pos = outerArc.centroid(value);
    pos[0] = firstPositionParams(value);
    return `translate(${pos})`;
  };

  const getPositionatedLabels = value =>
    midangle(value) < Math.PI ? "start" : "end";

  const getPositionatedPolylines = value => {
    const posA = arcPie.centroid(value);
    const posB = outerArc.centroid(value);
    const posC = outerArc.centroid(value);
    posC[0] = firstPositionParams(value);
    return [posA, posB, posC];
  };

  return {
    getTranslatedLabels,
    getPositionatedLabels,
    getPositionatedPolylines
  };
};
