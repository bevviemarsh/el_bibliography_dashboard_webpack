import { selectionLabels, selectionParams } from "../elements/selectionParams";
import { chartsParams } from "../elements/graphBuilders";
import { setAnimationParams } from "./animationParams";

const { pathLabels } = selectionLabels;
const { durationTime, delayTime } = chartsParams;

export const handlePathAnimation = (d, i, n) => {
  let totalLength = n[i].getTotalLength();

  setAnimationParams(
    selectionParams
      .selection(n[i])
      .attr(pathLabels.strokeDasharray, `${totalLength} ${totalLength}`)
      .attr(pathLabels.strokeDashoffset, totalLength),
    delayTime,
    durationTime
  ).attr(pathLabels.strokeDashoffset, 0);
};
