export const chartsVisualElements = {
  lineColor: "#7A6564",
  circleColor: "#C3501F",
  clickedCircleColor: "#8C7776",
  strokeWidth: 1,
  labelsParams: {
    fontFamily: "Muli",
    fontWeight: "normal",
    fontSize: "13px",
    labelColor: "#2D1F1D",
    opacityValue: "0"
  },
  lollipopAxesColor: "#7A6564",
  opacity: "opacity",
  visible: "1",
  hidden: "0",
  cursorPointer: "pointer"
};

export const chartsParams = {
  svg: "svg",
  container: field => document.getElementById(field),
  labelTypes: {
    lollipopClass: ".labelsLollipop"
  },
  chartFields: {
    lollipop: "lollipop"
  },
  radius: 7,
  margin: 10,
  graphMargin: { top: 20, left: 20, right: 100, bottom: 100 },
  offsetWidth: container => container.offsetWidth,
  offsetHeight: container => container.offsetHeight,
  svgWidth: (width, margin) => width - margin,
  svgHeight: (height, margin) => height - margin,
  graphWidth: (svgWidth, leftMargin, rightMargin) =>
    svgWidth - leftMargin - rightMargin,
  graphHeight: (svgHeight, topMargin, bottomMargin) =>
    svgHeight - topMargin - bottomMargin,
  translate: (firstMarginValue, secondMarginValue) =>
    `translate(${firstMarginValue}, ${secondMarginValue})`,
  durationTime: 2000,
  labelDurationTime: 200
};

export const clickParams = {
  click: "click",
  clicked: true
};
