import { selectionLabels } from "../elements/selectionParams";

const { polylineLabels } = selectionLabels;
const {
  className,
  fill,
  stroke,
  strokeWidthLabel,
  points,
  opacity
} = polylineLabels;

export const getPolylinesAttributes = (
  selection,
  classNameValue,
  fillValue,
  strokeColor,
  strokeWidthValue,
  pointsValue,
  opacityValue
) =>
  selection
    .attr(className, classNameValue.substr(1))
    .attr(fill, fillValue)
    .attr(stroke, strokeColor)
    .attr(strokeWidthLabel, strokeWidthValue)
    .attr(points, pointsValue)
    .attr(opacity, opacityValue);
