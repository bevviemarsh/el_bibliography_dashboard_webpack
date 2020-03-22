import { chartsParams, chartsVisualElements } from "../elements/graphBuilders";
import { chartsManager } from "../tools/chartsManager";
import { selectionParams, selectionLabels } from "../elements/selectionParams";

const { click } = chartsParams;
const { clicked } = chartsManager;
const { selectionAll } = selectionParams;
const { circleLabels } = selectionLabels;
const { fill } = circleLabels;
const { clickedCircleColor, opacity, visible, hidden } = chartsVisualElements;

export const handleEvents = (
  graphSelection,
  svgSelection,
  durationTime,
  labelType
) => {
  const isClicked = (param1, param2) => (clicked ? param1 : param2);

  const handleDisplayLabels = (d, i, n) => {
    selectionAll(n)
      .transition()
      .duration(durationTime)
      .attr(fill, d => isClicked(clickedCircleColor, d.circleColor));

    selectionAll(labelType)
      .transition()
      .duration(durationTime)
      .style(opacity, isClicked(visible, hidden));
  };

  graphSelection.selectAll(svgSelection).on(click, (d, i, n) => {
    handleDisplayLabels(d, i, n);
    clicked = !clicked;
  });
};
