import { selectionLabels } from "../elements/selectionParams";

const { lineLabels } = selectionLabels;
const { x1, x2, y1, y2, stroke, strokeWidthLabel } = lineLabels;

export const getLinesAttributes = (
  selection,
  x1Fn,
  x2Fn,
  y1Fn,
  y2Fn,
  colorFn,
  strokeWidthValue
) =>
  selection
    .attr(x1, x1Fn)
    .attr(x2, x2Fn)
    .attr(y1, y1Fn)
    .attr(y2, y2Fn)
    .attr(stroke, colorFn)
    .attr(strokeWidthLabel, strokeWidthValue);
