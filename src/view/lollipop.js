import { lollipopData } from "../dataTools/dataForGraphs";
import { selectionLabels } from "../elements/selectionParams";
import { bottomAxisLollipop, leftAxisLollipop } from "../tools/axesCreator";
import { chartsVisualElements, chartsParams } from "../elements/graphBuilders";
import {
  lollipopPosition,
  lollipopBottomAxisPosition,
  lollipopLeftAxisPosition
} from "../elements/chartPositons";
import { xAxisLollipop, yAxisLollipop } from "../tools/axesCreator";
import {
  lollipopXPosition,
  lollipopYPosition
} from "../elements/chartPositons";
import { chartsDeviations } from "../elements/chartsDeviations";
import { getMainChartStructure } from "../charts/chartStructure";
import { getChartAxes } from "../charts/chartAxes";
import { getEnteredSelectionData } from "../charts/chartDataSelection";
import { getLinesAttributes } from "../charts/lineAttributes";
import { getCirclesAttributes } from "../charts/circleAttributes";
import { getLabelsAttributes } from "../charts/labelAttributes.js";
import {
  getLinesAnimated,
  getCirclesAnimated
} from "../animations/lollipopAnimations";
import { getDataExit } from "../charts/chartDataExit";
import { handleEvents } from "../actions/labelsActions";

const { lineLabels, circleLabels, labelLabels } = selectionLabels;
const {
  lollipopAxesColor,
  strokeWidth,
  labelsParams,
  cursorPointer
} = chartsVisualElements;
const {
  chartFields,
  margin,
  durationTime,
  labelTypes,
  labelDurationTime
} = chartsParams;
const { lollipop } = chartFields;
const { lollipopDeviations } = chartsDeviations;
const { yPositionDeviation, labelsDeviation } = lollipopDeviations;
const { line } = lineLabels;
const { circle } = circleLabels;
const { text } = labelLabels;
const {
  fontFamily,
  fontWeight,
  fontSize,
  labelColor,
  opacityValue
} = labelsParams;
const { lollipopClass } = labelTypes;

export const createLollipopChart = () => {
  const lollipopChart = getMainChartStructure(lollipop, lollipopPosition);
  getChartAxes(
    lollipopChart,
    lollipopBottomAxisPosition,
    lollipopLeftAxisPosition,
    lollipopAxesColor,
    bottomAxisLollipop,
    leftAxisLollipop
  );

  const lines = getEnteredSelectionData(
    lollipopChart,
    line,
    lollipopData,
    d => d.id
  );

  const circles = getEnteredSelectionData(
    lollipopChart,
    circle,
    lollipopData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    lollipopChart,
    text,
    lollipopData,
    d => d.id
  );

  getLinesAttributes(
    lines,
    () => xAxisLollipop(0),
    d => xAxisLollipop(d.x2),
    d =>
      lollipopYPosition(
        yAxisLollipop,
        d.y1,
        margin,
        strokeWidth,
        yPositionDeviation
      ),
    d =>
      lollipopYPosition(
        yAxisLollipop,
        d.y2,
        margin,
        strokeWidth,
        yPositionDeviation
      ),
    d => d.lineColor,
    strokeWidth
  );

  getCirclesAttributes(
    circles,
    () => xAxisLollipop(0),
    d =>
      lollipopYPosition(
        yAxisLollipop,
        d.cy,
        margin,
        strokeWidth,
        yPositionDeviation
      ),
    d => d.r,
    d => d.circleColor,
    cursorPointer
  );

  getLabelsAttributes(
    labels,
    d => `${d.genre}: ${d.value}`,
    lollipopClass,
    d => lollipopXPosition(xAxisLollipop, d.cx, margin),
    d =>
      lollipopYPosition(
        yAxisLollipop,
        d.cy,
        margin,
        strokeWidth,
        yPositionDeviation
      ) + labelsDeviation,
    fontFamily,
    fontSize,
    fontWeight,
    labelColor,
    opacityValue
  );

  getLinesAnimated(lines, null, durationTime);
  getCirclesAnimated(circles, null, durationTime);

  getDataExit(lines);
  getDataExit(circles);
  getDataExit(labels);

  handleEvents(lollipopChart, circle, labelDurationTime, lollipopClass);
};
