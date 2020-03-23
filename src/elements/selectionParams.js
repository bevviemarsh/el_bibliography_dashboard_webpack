import * as d3 from "d3";

export const selectionParams = {
  selection: d3.select,
  selectionAll: d3.selectAll,
  appendElement: (selection, label) => selection.append(label),
  scaleLinear: d3.scaleLinear,
  scaleBand: d3.scaleBand,
  axisBottom: d3.axisBottom,
  axisLeft: d3.axisLeft
};

export const selectionLabels = {
  svg: "svg",
  group: "g",
  width: "width",
  height: "height",
  transform: "transform",
  color: "color",
  lineLabels: {
    line: "line",
    x1: "x1",
    x2: "x2",
    y1: "y1",
    y2: "y2",
    stroke: "stroke",
    strokeWidthLabel: "stroke-width"
  },
  circleLabels: {
    circle: "circle",
    cx: "cx",
    cy: "cy",
    r: "r",
    fill: "fill",
    cursor: "cursor"
  },
  labelLabels: {
    text: "text",
    className: "class",
    x: "x",
    y: "y",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontWeight: "font-weight",
    fill: "fill",
    opacity: "opacity"
  }
};
