export const chartsVisualElements = {
  colors: {
    strokeColor: "black",
    lineColor: "#efeef1",
    circleColor: "#054661",
    clickedCircleColor: "#0988be",
    lollipopAxesColor: "#a7b4fb",
    circularBarColor: "#054661",
    clickedCircularBarColor: "#0988be",
    pieLinesColor: "#a7b4fb",
    pieColor: "#054661",
    pieClickedColor: "#0988be",
    piePolylineColors: "#efeef1",
    lineChartLineColor: "#efeef1",
    lineChartCircleColor: "#054661",
    lineChartAxesColor: "#a7b4fb",
    lineChartClickedCircleColor: "#0988be"
  },
  strokeWidth: 1,
  labelsParams: {
    fontFamily: "Muli",
    fontWeight: "normal",
    fontSize: "13px",
    labelColor: "#1af48b",
    opacityValue: "0",
    textAnchorPos: "start",
    letterSpacing: "1",
    axesFontSize: "12px",
    axesLetterSpacing: "0.5"
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
  radius: 5.5,
  clickedRadius: 7,
  pieRadius: (graphWidthValue, graphHeightValue) =>
    Math.min(graphWidthValue, graphHeightValue / 2),
  pieInnerValue: 30,
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
    Math.min(graphWidthValue, graphHeightValue / 2),
  tickSizeValue: "10"
};
