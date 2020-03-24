import { setAnimationParams } from "./animationParams";
import { selectionLabels } from "../elements/selectionParams";
import { xAxisLollipop } from "../charts/lollipop/lollipopAxes";

const { lineLabels, circleLabels } = selectionLabels;
const { x1 } = lineLabels;
const { cx } = circleLabels;

export const getLinesAnimated = (selection, delayTime, durationTime) =>
  setAnimationParams(selection, delayTime, durationTime).attr(x1, d =>
    xAxisLollipop(d.x1)
  );

export const getCirclesAnimated = (selection, delayTime, durationTime) =>
  setAnimationParams(selection, delayTime, durationTime).attr(cx, d =>
    xAxisLollipop(d.cx)
  );
