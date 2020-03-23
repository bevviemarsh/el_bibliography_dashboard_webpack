import { chartsVisualElements, clickParams } from "../elements/graphBuilders";
import { selectionParams, selectionLabels } from "../elements/selectionParams";

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
  const isClicked = (param1, param2) => (clickParams.clicked ? param1 : param2);

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

  graphSelection.selectAll(svgSelection).on(clickParams.click, (d, i, n) => {
    handleDisplayLabels(d, i, n);
    clickParams.clicked = !clickParams.clicked;
  });
};
