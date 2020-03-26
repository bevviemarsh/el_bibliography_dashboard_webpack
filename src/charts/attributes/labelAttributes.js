import { selectionLabels } from "../../elements/selectionParams";

const { labelLabels } = selectionLabels;
const {
  className,
  x,
  y,
  textAnchor,
  transform,
  fontFamily,
  fontSize,
  fontWeight,
  fill,
  opacity
} = labelLabels;

export const getLabelsAttributes = (
  selection,
  textFn,
  nameClass,
  xFn,
  yFn,
  textAnchorPosition,
  transformValues,
  fontFamilyType,
  fontSizeValue,
  fontWeightValue,
  colorName,
  opacityValue
) =>
  selection
    .text(textFn)
    .attr(className, nameClass.substr(1))
    .attr(x, xFn)
    .attr(y, yFn)
    .attr(textAnchor, textAnchorPosition)
    .attr(transform, transformValues)
    .style(fontFamily, fontFamilyType)
    .style(fontSize, fontSizeValue)
    .style(fontWeight, fontWeightValue)
    .style(fill, colorName)
    .style(opacity, opacityValue);
