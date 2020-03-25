import {
  chartsVisualElements,
  chartsParams,
  clickParams
} from "../elements/graphBuilders";
import { selectionParams, selectionLabels } from "../elements/selectionParams";

const { selectionAll } = selectionParams;
const { circleLabels } = selectionLabels;
const { fill } = circleLabels;
const { opacity, visible, hidden } = chartsVisualElements;
// const { chartFields } = chartsParams;

export const handleEvents = (
  graphSelection,
  svgSelection,
  durationTime,
  labelType,
  clickedColor,
  unClickedColor
) => {
  const isClicked = (param1, param2) => (clickParams.clicked ? param1 : param2);

  const handleDisplayLabelsAndColors = (d, i, n) => {
    selectionAll(n)
      .transition()
      .duration(durationTime)
      .attr(fill, d => isClicked(clickedColor, unClickedColor));

    selectionAll(labelType)
      .transition()
      .duration(durationTime)
      .style(opacity, isClicked(visible, hidden));
  };

  graphSelection.selectAll(svgSelection).on(clickParams.click, (d, i, n) => {
    handleDisplayLabelsAndColors(d, i, n);
    clickParams.clicked = !clickParams.clicked;
  });
};
