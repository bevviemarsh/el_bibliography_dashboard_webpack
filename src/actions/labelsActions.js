import { chartsVisualElements, chartsParams } from "../elements/graphBuilders";
import { selectionParams, selectionLabels } from "../elements/selectionParams";

const { selectionAll } = selectionParams;
const { circleLabels } = selectionLabels;
const { fill } = circleLabels;
const { opacity, visible, hidden } = chartsVisualElements;
const { clickParams } = chartsParams;

export const handleEvents = (
  graphSelection,
  svgSelection,
  durationTime,
  labelType,
  clickedColor,
  unClickedColor,
  clickParam
) => {
  const isClicked = (param1, param2) => (clickParam ? param1 : param2);

  const handleDisplayLabelsAndColors = (d, i, n) => {
    selectionAll(n)
      .transition()
      .duration(durationTime)
      .attr(fill, isClicked(clickedColor, unClickedColor));

    selectionAll(labelType)
      .transition()
      .duration(durationTime)
      .style(opacity, isClicked(visible, hidden));
  };

  graphSelection.selectAll(svgSelection).on(clickParams.click, (d, i, n) => {
    handleDisplayLabelsAndColors(d, i, n);
    clickParam = !clickParam;
    console.log(clickParam);
  });
};
