import { selectionParams } from "../../../elements/selectionParams";
import { chartsParams } from "../../../elements/graphBuilders";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../../../elements/svgParams";

export const pieRadiusValue = chartsParams.pieRadius(
  calculatedGraphWidth,
  calculatedGraphHeight
);

export const arcPie = selectionParams.arcGenerator(
  chartsParams.pieInnerValue,
  pieRadiusValue
);

export const getPieParams = () => {
  const createPieData = (valueFn, data) => {
    const pieFn = selectionParams.getPie(valueFn);
    const getPieData = pieFn(data);
    return getPieData;
  };

  return {
    createPieData
  };
};
