import { selectionLabels } from "../../elements/selectionParams";

const { circleLabels } = selectionLabels;
const { cx, cy, r, fill, cursor } = circleLabels;

export const getCirclesAttributes = (
  selection,
  cxFn,
  cyFn,
  rFn,
  colorFn,
  cursorType
) =>
  selection
    .attr(cx, cxFn)
    .attr(cy, cyFn)
    .attr(r, rFn)
    .attr(fill, colorFn)
    .attr(cursor, cursorType);
