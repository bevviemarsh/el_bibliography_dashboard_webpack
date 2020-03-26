export const chartsVisualElements = {
  colors: {
    strokeColor: "black",
    lineColor: "#7A6564",
    circleColor: "#C3501F",
    clickedCircleColor: "#8C7776",
    circularBarColor: "#424242",
    clickedCircularBarColor: "#609FC0",
    lollipopAxesColor: "#7A6564",
    pieLinesColor: "#1F1E1C",
    piecesOfPieColors: ["#1A335C", "#C5743C", "#BD6454", "#1E1E1E", "#878787"],
    lineChartLineColor: "#756939",
    lineChartCircleColor: "#8B3B18",
    lineChartAxesColor: "#444545",
    lineChartClickedCircleColor: "#E2AE63"
  },
  strokeWidth: 1,
  labelsParams: {
    fontFamily: "Muli",
    fontWeight: "normal",
    fontSize: "13px",
    labelColor: "#2D1F1D",
    opacityValue: "0",
    textAnchorPos: "start"
  },
  opacity: "opacity",
  visible: "1",
  hidden: "0",
  noneFill: "none",
  cursorPointer: "pointer"
};

export const chartsParams = {
  svg: "svg",
  container: field => document.getElementById(field),
  labelTypes: {
    lollipopClass: ".labelsLollipop",
    circularClass: ".labelsCircular",
    pieClass: ".labelsPieChart",
    lineClass: ".labelsLineGraph"
  },
  chartFields: {
    lollipop: "lollipop",
    circular: "circular",
    pie: "pie",
    line: "line"
  },
  clickParams: {
    click: "click",
    clicked: {
      lollipop: true,
      circular: true,
      pie: true,
      line: true
    }
  },
  radius: 7,
  pieRadius: (graphWidthValue, graphHeightValue) =>
    Math.min(graphWidthValue, graphHeightValue / 2),
  lineChartRadius: 5,
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
  delayTime: 1000,
  labelDurationTime: 200,
  circularBarInnerRadius: 15,
  circularBarOuterRadius: (graphWidthValue, graphHeightValue) =>
    Math.min(graphWidthValue, graphHeightValue / 2)
};
