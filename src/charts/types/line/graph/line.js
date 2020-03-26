import { lineChartData } from "../../../../dataTools/dataForGraphs";
import { getMainChartStructure } from "../../../builders/chartStructure";
import { getChartAxes } from "../../../builders/chartAxes";
import { getEnteredSelectionData } from "../../../builders/chartDataSelection";
import { getDataExit } from "../../../builders/chartDataExit";
import {
  chartsVisualElements,
  chartsParams
} from "../../../../elements/graphBuilders";
import { selectionLabels } from "../../../../elements/selectionParams";
import {
  lineChartPosition,
  lineChartBottomAxisPosition,
  lineChartLeftAxisPosition,
  labelLineChartYPosition
} from "../linePositions";
import {
  xAxisLineChart,
  yAxisLineChart,
  bottomAxisLineChart,
  leftAxisLineChart
} from "../lineAxes";
import { linePathCreator } from "../lineChartLinePathCreator";
import { getCirclesAttributes } from "../../../attributes/circleAttributes";
import { getPathAttributes } from "../../../attributes/pathAttributes";
import { getLabelsAttributes } from "../../../attributes/labelAttributes";
import { handleEvents } from "../../../../actions/labelsActions";
import { handlePathAnimation } from "../../../../animations/lineChartAnimations";

const {
  colors,
  strokeWidth,
  labelsParams,
  noneFill,
  cursorPointer
} = chartsVisualElements;
const {
  chartFields,
  labelTypes,
  labelDurationTime,
  clickParams
} = chartsParams;
const {
  fontFamily,
  fontWeight,
  fontSize,
  labelColor,
  opacityValue
} = labelsParams;

export const createLineChart = () => {
  const lineChart = getMainChartStructure(chartFields.line, lineChartPosition);

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
    selectionLabels.pathLabels.path,
    lineChartData,
    d => d.id
  );

  const circles = getEnteredSelectionData(
    lineChart,
    selectionLabels.circleLabels.circle,
    lineChartData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    lineChart,
    selectionLabels.labelLabels.text,
    lineChartData,
    d => d.id
  );

  getPathAttributes(
    path,
    linePathCreator(lineChartData),
    noneFill,
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
    labelTypes.lineClass,
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
    selectionLabels.circleLabels.circle,
    labelDurationTime,
    labelTypes.lineClass,
    colors.lineChartCircleColor,
    colors.circleColor,
    clickParams.clicked.line
  );
};
