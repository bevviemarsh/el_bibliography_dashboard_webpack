import { selectionLabels } from "../elements/selectionParams";

const { circleLabels } = selectionLabels;
const { cx, cy, r, fill } = circleLabels;

export const getCirclesAttributes = (selection, cxFn, cyFn, rFn, colorFn) =>
  selection
    .attr(cx, cxFn)
    .attr(cy, cyFn)
    .attr(r, rFn)
    .attr(fill, colorFn);
