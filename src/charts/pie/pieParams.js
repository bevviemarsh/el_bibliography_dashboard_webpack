import { selectionParams } from "../../elements/selectionParams";
import { chartsParams } from "../../elements/graphBuilders";
import {
  calculatedGraphWidth,
  calculatedGraphHeight
} from "../../elements/svgParams";

const { getPie, arcGenerator } = selectionParams;
const { pieRadius } = chartsParams;

export const pieRadiusValue = pieRadius(
  calculatedGraphWidth,
  calculatedGraphHeight
);

export const arcPie = arcGenerator(null, pieRadiusValue);

export const getPieParams = () => {
  const getPieColors = (scaleType, rangeArray) => scaleType.range(rangeArray);

  const createPieData = (valueFn, data) => {
    const pieFn = getPie(valueFn);
    const getPieData = pieFn(data);
    return getPieData;
  };

  return {
    getPieColors,
    createPieData
  };
};
