import { circularBarPlotData } from "../../../../dataTools/dataForGraphs";
import {
  chartsVisualElements,
  chartsParams
} from "../../../../elements/graphBuilders";
import {
  circularPosition,
  getCircularLabelsPositions
} from "../circularPositions";
import { getMainChartStructure } from "../../../builders/chartStructure";
import { xCircular, yCircular } from "../circularScales";
import { circularBarsData } from "../circularBarsData";
import { getEnteredSelectionData } from "../../../builders/chartDataSelection";
import { getLabelsAttributes } from "../../../attributes/labelAttributes";
import {
  selectionLabels,
  selectionParams
} from "../../../../elements/selectionParams";
import { getPathAttributes } from "../../../attributes/pathAttributes";
import { getDataExit } from "../../../builders/chartDataExit";
import { handleEvents } from "../../../../actions/labelsActions";

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
    chartFields.circular,
    circularPosition
  );

  const bars = getEnteredSelectionData(
    circularBarPlotChart,
    selectionLabels.pathLabels.path,
    circularBarPlotData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    circularBarPlotChart,
    selectionLabels.labelLabels.text,
    circularBarPlotData,
    d => d.id
  );

  getPathAttributes(
    bars,
    circularBarsData(
      selectionParams.arcGenerator(circularBarInnerRadius, d =>
        yCircular(d.value)
      ),
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
    labelTypes.circularClass,
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
    selectionLabels.pathLabels.path,
    labelDurationTime,
    labelTypes.circularClass,
    colors.clickedCircularBarColor,
    colors.circularBarColor,
    clickParams.clicked.circular
  );
};
