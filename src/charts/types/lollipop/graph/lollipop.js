import { lollipopData } from "../../../../dataTools/dataForGraphs";
import { selectionLabels } from "../../../../elements/selectionParams";
import {
  xAxisLollipop,
  yAxisLollipop,
  bottomAxisLollipop,
  leftAxisLollipop
} from "../lollipopAxes";
import {
  chartsVisualElements,
  chartsParams
} from "../../../../elements/graphBuilders";
import {
  lollipopPosition,
  lollipopBottomAxisPosition,
  lollipopLeftAxisPosition,
  lollipopXPosition,
  lollipopYPosition
} from "../lollipopPositions";
import { chartsDeviations } from "../../../../elements/chartsDeviations";
import { getMainChartStructure } from "../../../builders/chartStructure";
import { getChartAxes } from "../../../builders/chartAxes";
import { getEnteredSelectionData } from "../../../builders/chartDataSelection";
import { getLinesAttributes } from "../../../attributes/lineAttributes";
import { getCirclesAttributes } from "../../../attributes/circleAttributes";
import { getLabelsAttributes } from "../../../attributes/labelAttributes.js";
import {
  getLinesAnimated,
  getCirclesAnimated
} from "../../../../animations/lollipopAnimations";
import { getDataExit } from "../../../builders/chartDataExit";
import { handleEvents } from "../../../../actions/labelsActions";

const {
  colors,
  strokeWidth,
  labelsParams,
  cursorPointer
} = chartsVisualElements;
const {
  chartFields,
  margin,
  durationTime,
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

export const createLollipopChart = () => {
  const lollipopChart = getMainChartStructure(
    chartFields.lollipop,
    lollipopPosition
  );

  getChartAxes(
    lollipopChart,
    lollipopBottomAxisPosition,
    lollipopLeftAxisPosition,
    colors.lollipopAxesColor,
    bottomAxisLollipop,
    leftAxisLollipop
  );

  const lines = getEnteredSelectionData(
    lollipopChart,
    selectionLabels.lineLabels.line,
    lollipopData,
    d => d.id
  );

  const circles = getEnteredSelectionData(
    lollipopChart,
    selectionLabels.circleLabels.circle,
    lollipopData,
    d => d.id
  );

  const labels = getEnteredSelectionData(
    lollipopChart,
    selectionLabels.labelLabels.text,
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
        chartsDeviations.lollipopDeviations.yPositionDeviation
      ),
    d =>
      lollipopYPosition(
        yAxisLollipop,
        d.y2,
        margin,
        strokeWidth,
        chartsDeviations.lollipopDeviations.yPositionDeviation
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
        chartsDeviations.lollipopDeviations.yPositionDeviation
      ),
    d => d.r,
    d => d.circleColor,
    cursorPointer
  );

  getLabelsAttributes(
    labels,
    d => d.value,
    labelTypes.lollipopClass,
    d => lollipopXPosition(xAxisLollipop, d.cx, margin),
    d =>
      lollipopYPosition(
        yAxisLollipop,
        d.cy,
        margin,
        strokeWidth,
        chartsDeviations.lollipopDeviations.yPositionDeviation
      ) + chartsDeviations.lollipopDeviations.labelsDeviation,
    null,
    null,
    fontFamily,
    fontSize,
    fontWeight,
    labelColor,
    opacityValue,
    letterSpacing
  );

  getLinesAnimated(lines, null, durationTime);
  getCirclesAnimated(circles, null, durationTime);

  getDataExit(lines);
  getDataExit(circles);
  getDataExit(labels);

  handleEvents(
    lollipopChart,
    selectionLabels.circleLabels.circle,
    labelDurationTime,
    labelTypes.lollipopClass,
    colors.clickedCircleColor,
    colors.circleColor,
    clickParams.clicked.lollipop
  );
};
