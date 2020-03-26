import { circularBarPlotData } from "../../dataTools/dataForGraphs";
import {
  chartsVisualElements,
  chartsParams
} from "../../elements/graphBuilders";
import {
  circularPosition,
  getCircularLabelsPositions
} from "./circularPositions";
import { getMainChartStructure } from "../chartStructure";
import { xCircular, yCircular } from "./circularScales";
import { circularBarsData } from "./circularBarsData";
import { getEnteredSelectionData } from "../chartDataSelection";
import { getLabelsAttributes } from "../labelAttributes.js";
import {
  selectionLabels,
  selectionParams
} from "../../elements/selectionParams";
import { getPathAttributes } from "../pathAttributes";
import { getDataExit } from "../chartDataExit";
import { handleEvents } from "../../actions/labelsActions";

const {
  colors,
  strokeWidth,
  cursorPointer,
  labelsParams
} = chartsVisualElements;
const {
  chartFields,
  circularBarInnerRadius,
  labelTypes,
  labelDurationTime,
  clickParams
} = chartsParams;
const { circular } = chartFields;
const { pathLabels, labelLabels } = selectionLabels;
const { arcGenerator } = selectionParams;
const { text } = labelLabels;
const { circularClass } = labelTypes;
const {
  fontFamily,
  fontWeight,
  fontSize,
  labelColor,
  opacityValue,
  textAnchorPos
} = labelsParams;

export const createCircularBarPlot = () => {
  const circularBarPlotChart = getMainChartStructure(
    circular,
    circularPosition
  );

  const bars = getEnteredSelectionData(
    circularBarPlotChart,
    pathLabels.path,
    circularBarPlotData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    circularBarPlotChart,
    text,
    circularBarPlotData,
    d => d.id
  );

  getPathAttributes(
    bars,
    circularBarsData(
      arcGenerator(circularBarInnerRadius, d => yCircular(d.value)),
      d => xCircular(d.city),
      d => xCircular(d.city) + xCircular.bandwidth()
    ),
    colors.circularBarColor,
    null,
    strokeWidth,
    cursorPointer
  );

  getLabelsAttributes(
    labels,
    d => `${d.city}: ${d.value}`,
    circularClass,
    null,
    null,
    textAnchorPos,
    d => getCircularLabelsPositions(xCircular, yCircular, d.city, d.value),
    fontFamily,
    fontSize,
    fontWeight,
    labelColor,
    opacityValue
  );

  getDataExit(bars);
  getDataExit(labels);

  handleEvents(
    circularBarPlotChart,
    pathLabels.path,
    labelDurationTime,
    circularClass,
    colors.clickedCircularBarColor,
    colors.circularBarColor,
    clickParams.clicked.circular
  );
};
