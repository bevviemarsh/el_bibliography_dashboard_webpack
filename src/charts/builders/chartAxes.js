import {
  selectionParams,
  selectionLabels
} from "../../elements/selectionParams";
import { chartsVisualElements } from "../../elements/graphBuilders";

const { appendElement } = selectionParams;
const { group, transform, color, labelLabels } = selectionLabels;
const { fontFamily, fontSize, letterSpacing } = labelLabels;
const { labelsParams } = chartsVisualElements;

export const getChartAxes = (
  chartType,
  bottomAxisPosition,
  leftAxisPosition,
  axesColor,
  bottomAxis,
  leftAxis
) => {
  const appendAxis = (selection, axisPosition, properColor, properAxis) =>
    selection
      .attr(transform, axisPosition)
      .style(color, properColor)
      .call(properAxis)
      .style(fontFamily, labelsParams.fontFamily)
      .style(fontSize, labelsParams.axesFontSize)
      .style(letterSpacing, labelsParams.axesLetterSpacing);

  const xAxis = appendAxis(
    appendElement(chartType, group),
    bottomAxisPosition,
    axesColor,
    bottomAxis
  );
  const yAxis = appendAxis(
    appendElement(chartType, group),
    leftAxisPosition,
    axesColor,
    leftAxis
  );
  return { xAxis, yAxis };
};
