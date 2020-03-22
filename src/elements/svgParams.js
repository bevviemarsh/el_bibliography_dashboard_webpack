import { chartsParams } from "./graphBuilders";
import "../assets/styles/style.css";

const {
  container,
  chartFields,
  margin,
  graphMargin,
  offsetWidth,
  offsetHeight,
  svgWidth,
  svgHeight,
  graphWidth,
  graphHeight
} = chartsParams;
const { lollipop } = chartFields;

export const mainContainer = chartField => container(chartField);

export const basicWidth = offsetWidth(mainContainer(lollipop));
export const calculatedSvgWidth = svgWidth(basicWidth, margin);
export const calculatedGraphWidth = graphWidth(
  calculatedSvgWidth,
  graphMargin.left,
  graphMargin.right
);

export const basicHeight = offsetHeight(mainContainer(lollipop));
export const calculatedSvgHeight = svgHeight(basicHeight, margin);
export const calculatedGraphHeight = graphHeight(
  calculatedSvgHeight,
  graphMargin.top,
  graphMargin.bottom
);
