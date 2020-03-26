import * as d3 from "d3";
import { scaleRadial } from "d3-scale";

export const selectionParams = {
  selection: d3.select,
  selectionAll: d3.selectAll,
  appendElement: (selection, label) => selection.append(label),
  scaleLinear: d3.scaleLinear,
  scaleBand: d3.scaleBand,
  scaleRadial: scaleRadial,
  scaleOrdinal: d3.scaleOrdinal,
  arcGenerator: (innerValue, outerValue) =>
    d3
      .arc()
      .innerRadius(innerValue)
      .outerRadius(outerValue),
  getPie: value => d3.pie().value(value),
  getLine: (xValue, yValue) =>
    d3
      .line()
      .x(xValue)
      .y(yValue),
  axisBottom: d3.axisBottom,
  axisLeft: d3.axisLeft,
  format: d3.format
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
    textAnchor: "text-anchor",
    transform: "transform",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontWeight: "font-weight",
    fill: "fill",
    opacity: "opacity"
  },
  pathLabels: {
    path: "path",
    d: "d",
    fill: "fill",
    stroke: "stroke",
    strokeWidthLabel: "stroke-width",
    cursor: "cursor",
    strokeDasharray: "stroke-dasharray",
    strokeDashoffset: "stroke-dashoffset"
  },
  polylineLabels: {
    polyline: "polyline",
    className: "class",
    fill: "fill",
    stroke: "stroke",
    strokeWidthLabel: "stroke-width",
    points: "points",
    opacity: "opacity"
  }
};
