import { mainSvgCreator } from "../tools/svgElementsCreator";
import { selectionParams, selectionLabels } from "../elements/selectionParams";
import { mainContainer, basicWidth, basicHeight } from "../elements/svgParams";
import { calculatedSvgWidth, calculatedSvgHeight } from "../elements/svgParams";

const { selection, appendElement } = selectionParams;
const { svg, group, width, height, transform } = selectionLabels;

export const getMainChartStructure = (chartField, chartPosition) => {
  const svgSelection = mainSvgCreator(
    selection,
    mainContainer(chartField),
    svg
  );

  const getWidthAndHeight = (selection, widthParam, heightParam) =>
    selection.attr(width, widthParam).attr(height, heightParam);

  const mainSvg = getWidthAndHeight(svgSelection, basicWidth, basicHeight);
  const appendedGroupToSvg = appendElement(mainSvg, group);

  const mainChart = getWidthAndHeight(
    appendedGroupToSvg,
    calculatedSvgWidth,
    calculatedSvgHeight
  ).attr(transform, chartPosition);

  return mainChart;
};
