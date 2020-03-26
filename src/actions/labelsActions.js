import { chartsVisualElements, chartsParams } from "../elements/graphBuilders";
import { selectionParams, selectionLabels } from "../elements/selectionParams";
import { setAnimationParams } from "../animations/animationParams";

const { opacity, visible, hidden } = chartsVisualElements;

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
    setAnimationParams(
      selectionParams.selectionAll(n),
      null,
      durationTime
    ).attr(
      selectionLabels.circleLabels.fill,
      isClicked(clickedColor, unClickedColor)
    );

    setAnimationParams(
      selectionParams.selectionAll(labelType),
      null,
      durationTime
    ).style(opacity, isClicked(visible, hidden));
  };

  graphSelection
    .selectAll(svgSelection)
    .on(chartsParams.clickParams.click, (d, i, n) => {
      handleDisplayLabelsAndColors(d, i, n);
      clickParam = !clickParam;
    });
};
