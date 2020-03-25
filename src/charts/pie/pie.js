import { pieChartData } from "../../dataTools/dataForGraphs";
import { getMainChartStructure } from "../chartStructure";
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
import { piePosition, getLabelsAndPolylinesPositions } from "./piePositions";
import { getPieParams, arcPie } from "./pieParams";
import { getPathAttributes } from "../pathAttributes";
import { getLabelsAttributes } from "../labelAttributes";
import { getPolylinesAttributes } from "../polylineAttributes";
import { handleEvents } from "../../actions/labelsActions";

const {
  colors,
  strokeWidth,
  labelsParams,
  nonefill,
  cursorPointer
} = chartsVisualElements;
const { chartFields, labelTypes, labelDurationTime } = chartsParams;
const { pie } = chartFields;
const { scaleOrdinal } = selectionParams;
const { pathLabels, labelLabels, polylineLabels } = selectionLabels;
const {
  fontFamily,
  fontWeight,
  fontSize,
  labelColor,
  opacityValue
} = labelsParams;
const { pieClass } = labelTypes;
const { getPieColors, createPieData } = getPieParams();
const {
  getTranslatedLabels,
  getPositionatedLabels,
  getPositionatedPolylines
} = getLabelsAndPolylinesPositions();

export const createPieChart = () => {
  const pieChart = getMainChartStructure(pie, piePosition);

  const pieColors = getPieColors(scaleOrdinal(), colors.piecesOfPieColors);
  const pieData = createPieData(d => d.value, pieChartData);

  const paths = getEnteredSelectionData(
    pieChart,
    pathLabels.path,
    pieData,
    d => d.id
  );
  const labels = getEnteredSelectionData(
    pieChart,
    labelLabels.text,
    pieData,
    d => d.id
  );
  const polylines = getEnteredSelectionData(
    pieChart,
    polylineLabels.polyline,
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
    pieClass,
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
    pieClass,
    nonefill,
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
    pathLabels.path,
    labelDurationTime,
    pieClass,
    null,
    null
  );
};
