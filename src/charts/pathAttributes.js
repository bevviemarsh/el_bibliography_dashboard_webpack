import { selectionLabels } from "../elements/selectionParams";

const { pathLabels } = selectionLabels;
const { d, fill, stroke, strokeWidthLabel, cursor } = pathLabels;

export const getPathAttributes = (
  selection,
  arcFn,
  colorValue,
  strokeColor,
  strokeWidthValue,
  cursorType
) =>
  selection
    .attr(d, arcFn)
    .attr(fill, colorValue)
    .attr(stroke, strokeColor)
    .attr(strokeWidthLabel, strokeWidthValue)
    .attr(cursor, cursorType);
