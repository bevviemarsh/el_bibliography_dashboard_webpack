export const setAnimationParams = (selection, delayTime, durationTime) =>
  selection
    .transition()
    .delay(delayTime)
    .duration(durationTime);
