import { pieChartData } from "../../../../dataTools/dataForGraphs";
import { getMainChartStructure } from "../../../builders/chartStructure";
import { getEnteredSelectionData } from "../../../builders/chartDataSelection";
import { getDataExit } from "../../../builders/chartDataExit";
import {
  chartsVisualElements,
  chartsParams
} from "../../../../elements/graphBuilders";
import { selectionLabels } from "../../../../elements/selectionParams";
import { piePosition, getLabelsAndPolylinesPositions } from "../piePositions";
import { getPieParams, arcPie } from "../pieParams";
import { getPathAttributes } from "../../../attributes/pathAttributes";
import { getLabelsAttributes } from "../../../attributes/labelAttributes";
import { getPolylinesAttributes } from "../../../attributes/polylineAttributes";
import { handleEvents } from "../../../../actions/labelsActions";
import { handlePieChartAnimation } from "../../../../animations/pieChartAnimation";

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
  opacityValue,
  letterSpacing
} = labelsParams;
const { createPieData } = getPieParams();
const {
  getTranslatedLabels,
  getPositionatedLabels,
  getPositionatedPolylines
} = getLabelsAndPolylinesPositions();

export const createPieChart = () => {
  const pieChart = getMainChartStructure(chartFields.pie, piePosition);

  const pieData = createPieData(d => d.value, pieChartData);

  const paths = getEnteredSelectionData(
    pieChart,
    selectionLabels.pathLabels.path,
    pieData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    pieChart,
    selectionLabels.labelLabels.text,
    pieData,
    d => d.id
  );
  const polylines = getEnteredSelectionData(
    pieChart,
    selectionLabels.polylineLabels.polyline,
    pieData,
    d => d.id
  );

  getPathAttributes(
    paths,
    arcPie,
    colors.pieColor,
    colors.pieLinesColor,
    strokeWidth,
    cursorPointer
  );

  getLabelsAttributes(
    labels,
    d => d.data.publisher,
    labelTypes.pieClass,
    null,
    null,
    d => getPositionatedLabels(d),
    d => getTranslatedLabels(d),
    fontFamily,
    fontWeight,
    fontSize,
    labelColor,
    opacityValue,
    letterSpacing
  );

  getPolylinesAttributes(
    polylines,
    labelTypes.pieClass,
    noneFill,
    colors.piePolylineColors,
    strokeWidth,
    d => getPositionatedPolylines(d),
    opacityValue
  );

  getDataExit(paths);
  getDataExit(labels);
  getDataExit(polylines);

  handlePieChartAnimation(paths);

  handleEvents(
    pieChart,
    selectionLabels.pathLabels.path,
    labelDurationTime,
    labelTypes.pieClass,
    colors.pieClickedColor,
    colors.pieColor,
    clickParams.clicked.pie
  );
};
