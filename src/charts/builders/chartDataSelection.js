import {
  selectionParams,
  selectionLabels
} from "../../elements/selectionParams";

export const getEnteredSelectionData = (
  chartType,
  svgLabel,
  dataArr,
  idCallback
) => {
  const handleSelectionAndData = (selection, svgLabel, dataArr, idCallback) =>
    selection.selectAll(svgLabel).data(dataArr, idCallback);

  const svgElements = handleSelectionAndData(
    selectionParams.appendElement(chartType, selectionLabels.group),
    svgLabel,
    dataArr,
    idCallback
  );

  return svgElements.enter().append(svgLabel);
};
