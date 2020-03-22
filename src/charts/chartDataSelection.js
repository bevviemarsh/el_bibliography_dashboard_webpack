import { selectionParams, selectionLabels } from "../elements/selectionParams";

const { appendElement } = selectionParams;
const { group } = selectionLabels;

export const getEnteredSelectionData = (
  chartType,
  svgLabel,
  arr,
  callbackFn
) => {
  const handleSelectionAndData = (selection, svgLabel, arr, callbackFn) =>
    selection.selectAll(svgLabel).data(arr, callbackFn);

  const svgElements = handleSelectionAndData(
    appendElement(chartType, group),
    svgLabel,
    arr,
    callbackFn
  );

  return svgElements.enter().append(svgLabel);
};
