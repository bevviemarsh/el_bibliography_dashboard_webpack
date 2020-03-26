import {
  selectionParams,
  selectionLabels
} from "../../elements/selectionParams";

const { appendElement } = selectionParams;
const { group, transform, color } = selectionLabels;

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
      .call(properAxis);

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
