import { pieChartData } from "../../../../dataTools/dataForGraphs";
import { getMainChartStructure } from "../../../builders/chartStructure";
import { getEnteredSelectionData } from "../../../builders/chartDataSelection";
import { getDataExit } from "../../../builders/chartDataExit";
import {
  chartsVisualElements,
  chartsParams
} from "../../../../elements/graphBuilders";
import {
  selectionParams,
  selectionLabels
} from "../../../../elements/selectionParams";
import { piePosition, getLabelsAndPolylinesPositions } from "../piePositions";
import { getPieParams, arcPie } from "../pieParams";
import { getPathAttributes } from "../../../attributes/pathAttributes";
import { getLabelsAttributes } from "../../../attributes/labelAttributes";
import { getPolylinesAttributes } from "../../../attributes/polylineAttributes";
import { handleEvents } from "../../../../actions/labelsActions";

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
const { scaleOrdinal } = selectionParams;
const {
  fontFamily,
  fontWeight,
  fontSize,
  labelColor,
  opacityValue
} = labelsParams;
const { getPieColors, createPieData } = getPieParams();
const {
  getTranslatedLabels,
  getPositionatedLabels,
  getPositionatedPolylines
} = getLabelsAndPolylinesPositions();

export const createPieChart = () => {
  const pieChart = getMainChartStructure(chartFields.pie, piePosition);

  const pieColors = getPieColors(scaleOrdinal(), colors.piecesOfPieColors);
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
    d => pieColors(d.value),
    colors.strokeColor,
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
    opacityValue
  );

  getPolylinesAttributes(
    polylines,
    labelTypes.pieClass,
    noneFill,
    colors.strokeColor,
    strokeWidth,
    d => getPositionatedPolylines(d),
    opacityValue
  );

  getDataExit(paths);
  getDataExit(labels);
  getDataExit(polylines);

  handleEvents(
    pieChart,
    selectionLabels.pathLabels.path,
    labelDurationTime,
    labelTypes.pieClass,
    d => pieColors(d.value),
    d => pieColors(d.value),
    clickParams.clicked.pie
  );
};
