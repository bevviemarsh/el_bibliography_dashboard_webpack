import { selectionLabels } from "../elements/selectionParams";

const { labelLabels } = selectionLabels;
const {
  className,
  x,
  y,
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
    .style(fontFamily, fontFamilyType)
    .style(fontSize, fontSizeValue)
    .style(fontWeight, fontWeightValue)
    .style(fill, colorName)
    .style(opacity, opacityValue);
