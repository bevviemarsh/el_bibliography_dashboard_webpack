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

export const arcPie = selectionParams.arcGenerator(null, pieRadiusValue);

export const getPieParams = () => {
  const getPieColors = (scaleType, rangeArray) => scaleType.range(rangeArray);

  const createPieData = (valueFn, data) => {
    const pieFn = selectionParams.getPie(valueFn);
    const getPieData = pieFn(data);
    return getPieData;
  };

  return {
    getPieColors,
    createPieData
  };
};
