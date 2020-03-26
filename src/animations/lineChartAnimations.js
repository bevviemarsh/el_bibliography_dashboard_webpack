import { selectionLabels, selectionParams } from "../elements/selectionParams";
import { chartsParams } from "../elements/graphBuilders";

const { pathLabels } = selectionLabels;
const { selection } = selectionParams;
const { durationTime, delayTime } = chartsParams;

export const handlePathAnimation = (d, i, n) => {
  let totalLength = n[i].getTotalLength();
  selection(n[i])
    .attr(pathLabels.strokeDasharray, `${totalLength} ${totalLength}`)
    .attr(pathLabels.strokeDashoffset, totalLength)
    .transition()
    .delay(delayTime)
    .duration(durationTime)
    .attr(pathLabels.strokeDashoffset, 0);
};
