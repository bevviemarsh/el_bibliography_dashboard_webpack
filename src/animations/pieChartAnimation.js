import { selectionParams, selectionLabels } from "../elements/selectionParams";
import { arcPie } from "../charts/types/pie/pieParams";
import { setAnimationParams } from "./animationParams";
import { chartsParams } from "../elements/graphBuilders";

const { durationTime } = chartsParams;

const handleArcAnimation = d => {
  const i = selectionParams.interpolate(d.endAngle, d.startAngle);

  const getPieAnimated = t => {
    d.startAngle = i(t);
    return arcPie(d);
  };

  return getPieAnimated;
};

export const handlePieChartAnimation = selection => {
  setAnimationParams(selection, null, durationTime).attrTween(
    selectionLabels.pathLabels.d,
    handleArcAnimation
  );
};
