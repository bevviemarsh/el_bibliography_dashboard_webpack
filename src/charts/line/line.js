import { lineChartData } from "../../dataTools/dataForGraphs";
import { getMainChartStructure } from "../chartStructure";
import { getChartAxes } from "../chartAxes";
import { getEnteredSelectionData } from "../chartDataSelection";
import { getDataExit } from "../chartDataExit";
import {
  chartsVisualElements,
  chartsParams
} from "../../elements/graphBuilders";
import {
  selectionParams,
  selectionLabels
} from "../../elements/selectionParams";
import {
  lineChartPosition,
  lineChartBottomAxisPosition,
  lineChartLeftAxisPosition,
  labelLineChartYPosition
} from "./linePositions";
import {
  xAxisLineChart,
  yAxisLineChart,
  bottomAxisLineChart,
  leftAxisLineChart
} from "./lineAxes";
import { linePathCreator } from "./lineChartLinePathCreator";
import { getCirclesAttributes } from "../circleAttributes";
import { getPathAttributes } from "../pathAttributes";
import { getLabelsAttributes } from "../labelAttributes";
import { handleEvents } from "../../actions/labelsActions";
import {
  handlePathAnimation,
  handleAnimationParams
} from "../../animations/lineChartAnimations";

const {
  colors,
  strokeWidth,
  labelsParams,
  nonefill,
  cursorPointer
} = chartsVisualElements;
const {
  chartFields,
  labelTypes,
  labelDurationTime,
  durationTime,
  delayTime,
  clickParams
} = chartsParams;
const { line } = chartFields;
const { pathLabels, circleLabels, labelLabels } = selectionLabels;
const {
  fontFamily,
  fontWeight,
  fontSize,
  labelColor,
  opacityValue
} = labelsParams;
const { lineClass } = labelTypes;

export const createLineChart = () => {
  console.log(lineChartData);

  const lineChart = getMainChartStructure(line, lineChartPosition);

  getChartAxes(
    lineChart,
    lineChartBottomAxisPosition,
    lineChartLeftAxisPosition,
    colors.lineChartAxesColor,
    bottomAxisLineChart,
    leftAxisLineChart
  );

  const path = getEnteredSelectionData(
    lineChart,
    pathLabels.path,
    lineChartData,
    d => d.id
  );

  const circles = getEnteredSelectionData(
    lineChart,
    circleLabels.circle,
    lineChartData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    lineChart,
    labelLabels.text,
    lineChartData,
    d => d.id
  );

  getPathAttributes(
    path,
    linePathCreator(lineChartData),
    nonefill,
    colors.lineChartLineColor,
    strokeWidth,
    null
  ).each((d, i, n) => handlePathAnimation(d, i, n));

  getCirclesAttributes(
    circles,
    d => xAxisLineChart(d.year),
    d => yAxisLineChart(d.value),
    d => d.r,
    colors.lineChartCircleColor,
    cursorPointer
  );

  getLabelsAttributes(
    labels,
    d => d.text,
    lineClass,
    d => xAxisLineChart(d.cx),
    d => labelLineChartYPosition(yAxisLineChart, d.cy),
    null,
    null,
    fontFamily,
    fontSize,
    fontWeight,
    labelColor,
    opacityValue
  );

  getDataExit(path);
  getDataExit(circles);
  getDataExit(labels);

  handleEvents(
    lineChart,
    circleLabels.circle,
    labelDurationTime,
    lineClass,
    colors.lineChartCircleColor,
    colors.circleColor,
    clickParams.clicked.line
  );
};
