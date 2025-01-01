var options = {
  render: function () {
    adjustLabelPositions(this);
  },
  title: {
    text: "Lorem ipsum dolor sit amet",
    align: "left",
    style: { fontSize: "1.2em", fontWeight: "bold" },
  },
  subtitle: {
    text: "consectetur adipiscing elit, sed do eiusmod",
    align: "left",
    style: { fontSize: "0.8em" },
  },
  colors: [
    "#551224",
    "#86253a",
    "#b5354b",
    "#e24158",
    "#ff5f74",
    "#ff90a8",
    "#fadde5",
  ],
  chart: { style: { fontFamily: "Gordita Regular" }, type: "line" },
  credits: { text: "everviz.com", href: "https://www.everviz.com" },
  plotOptions: {
    series: {
      borderRadius: 2,
      pointPadding: 0.01,
      groupPadding: 0.05,
      borderWidth: 0,
      shadow: false,
      marker: { enabled: false },
      lineWidth: 3,
      states: {
        select: { color: "#EFFFEF", borderColor: "black", dashStyle: "solid" },
      },
      label: { enabled: false },
    },
  },
  legend: {
    align: "left",
    verticalAlign: "top",
    itemMarginBottom: 10,
    x: 0,
    symbolRadius: 2,
    itemStyle: { fontWeight: "initial" },
  },
  yAxis: { title: { text: "" } },
  series: [
    { data: [], turboThreshold: 0, type: "line" },
    { data: [], turboThreshold: 0, type: "line" },
    { data: [], turboThreshold: 0, type: "line" },
  ],
  loading: { labelStyle: { fontStyle: "bold" } },
  lang: {
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    numericSymbols: ["k", "M", "G", "T", "P", "E"],
  },
  exporting: {
    useMultiLevelHeaders: false,
    url: "https://api.everviz.com/export",
  },
  annotations: [
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 0.9953941908713693,
            y: 4.032454361054767,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: false,
          format: "annotation 2",
          uniqueId: "highcharts-jm26opz-352",
          x: 69,
          y: -89,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 0.9953941908713693,
      y: 4.032454361054767,
      id: "d6453819-06d2-4517-9c6d-68517e39b87f",
      uniqueId: "highcharts-czu907g-277",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 1.9773029045643151,
            y: 5.0831643002028395,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 3",
          uniqueId: "highcharts-jm26opz-359",
          x: -63,
          y: -60,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 1.9773029045643151,
      y: 5.0831643002028395,
      id: "32a16595-a320-48ce-bebb-80297b4eb1a7",
      uniqueId: "highcharts-czu907g-282",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 3.005767634854772,
            y: 6.105476673427992,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 4",
          uniqueId: "highcharts-jm26opz-366",
          x: -158,
          y: -12,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 3.005767634854772,
      y: 6.105476673427992,
      id: "34586476-2cf7-4442-b2c0-d601c853d84a",
      uniqueId: "highcharts-czu907g-287",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 3.496721991701245,
            y: 4.032454361054767,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 5",
          uniqueId: "highcharts-jm26opz-373",
          x: -168,
          y: 0,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 3.496721991701245,
      y: 4.032454361054767,
      id: "acab9620-1872-4e0c-af55-e92173b48609",
      uniqueId: "highcharts-czu907g-292",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 3.0100000000000002,
            y: 0.9371196754563894,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 6",
          uniqueId: "highcharts-jm26opz-380",
          x: -66,
          y: -108,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 3.0100000000000002,
      y: 0.9371196754563894,
      id: "91f1212e-3045-4219-8ab0-dab1fba08868",
      uniqueId: "highcharts-czu907g-297",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 0.9996265560165973,
            y: 1.9594320486815415,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 7",
          uniqueId: "highcharts-jm26opz-387",
          x: 71,
          y: -73,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 0.9996265560165973,
      y: 1.9594320486815415,
      id: "3a5eef89-7d21-430f-bc09-14ced125b5a0",
      uniqueId: "highcharts-czu907g-302",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 4.008838174273859,
            y: 6.119675456389452,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 1",
          uniqueId: "highcharts-jm26opz-396",
          x: -101,
          y: 39,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 4.008838174273859,
      y: 6.119675456389452,
      id: "1f27d3a1-a7dc-4152-b488-3972803aa357",
      uniqueId: "highcharts-czu907g-307",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 4.042697095435685,
            y: 2.1724137931034484,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "triangle-down",
              visible: false,
              width: 10,
              index: 0,
            },
            {
              events: {},
              style: {
                cursor: "pointer",
                fill: "#ffffff",
                stroke: "#000000",
                "stroke-width": 2,
              },
              height: 10,
              symbol: "circle",
              visible: false,
              width: 10,
              index: 1,
            },
          ],
          overflow: "justify",
          crop: true,
          format: "annotation 8",
          uniqueId: "highcharts-jm26opz-424",
          everviz: { text: { showKeyOnMobile: { enabled: true } } },
          style: { fontSize: 11 },
          x: 96,
          y: -84,
          allowOverlap: true,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 4.042697095435685,
      y: 2.1724137931034484,
      id: "227bbc82-aec7-4910-9b43-458d57d20ab1",
      uniqueId: "highcharts-czu907g-312",
      draggable: null,
    },
  ],
  data: {
    csv: '"Category";"A";"B";"C"\n0;4;6;3\n1;3;2;4\n2;5;4;3\n3;6;4;1\n4;2;4;6\n5;3;2;4',
    seriesMapping: [
      { x: 0, y: 1, category: 0, a: 1, b: 2, c: 3 },
      { x: 0, y: 2, category: 0, a: 1, b: 2, c: 3 },
      { x: 0, y: 3, category: 0, a: 1, b: 2, c: 3 },
    ],
    assignDataFields: [
      { labels: "A", values: "B" },
      { labels: "A", values: "C" },
      { labels: "A", values: "D" },
    ],
  },
  stockTools: { gui: { enabled: false } },
};

function checkEdgeCollisions(
  plotAreaBoundary,
  labelBoundary,
  collisionBuffer,
  alignAttr,
  adjustments,
  markerStart = null,
  markerEnd = null
) {
  let newAdjustments = { ...adjustments };

  // Adjust for markerStart or markerEnd (if provided)
  if (markerStart) {
    // Move the label to avoid edge collision by considering markerStart position
    newAdjustments.x = labelBoundary.left + collisionBuffer;
  }

  if (markerEnd) {
    // Move the label to avoid edge collision by considering markerEnd position
    newAdjustments.x = labelBoundary.right - collisionBuffer;
  }

  if (labelBoundary.left < plotAreaBoundary.left) {
    newAdjustments.x =
      labelBoundary.x +
      (plotAreaBoundary.left - labelBoundary.x) +
      collisionBuffer;
  }

  if (labelBoundary.top < plotAreaBoundary.top) {
    newAdjustments.y =
      labelBoundary.top +
      (plotAreaBoundary.top - labelBoundary.top) +
      collisionBuffer;
  }

  if (labelBoundary.right > plotAreaBoundary.right) {
    newAdjustments.x =
      alignAttr.x -
      (labelBoundary.right - plotAreaBoundary.right) -
      collisionBuffer;
  }

  if (labelBoundary.bottom > plotAreaBoundary.bottom) {
    newAdjustments.y =
      alignAttr.y -
      (labelBoundary.bottom - plotAreaBoundary.bottom) -
      collisionBuffer;
  }

  return newAdjustments;
}

function checkVerticalRegion(labelBoundary, otherLabelBoundary) {
  const buffer = 6;

  return (
    Math.abs(labelBoundary.top - otherLabelBoundary.bottom) < buffer ||
    Math.abs(labelBoundary.bottom - otherLabelBoundary.top) < buffer ||
    (otherLabelBoundary.top <= labelBoundary.bottom &&
      otherLabelBoundary.top >= labelBoundary.top) ||
    (otherLabelBoundary.bottom <= labelBoundary.bottom &&
      otherLabelBoundary.bottom >= labelBoundary.top)
  );
}

function checkHorizontalRegion(labelBoundary, otherLabelBoundary) {
  const buffer = 6;

  return (
    Math.abs(labelBoundary.left - otherLabelBoundary.right) < buffer ||
    Math.abs(labelBoundary.right - otherLabelBoundary.left) < buffer ||
    (otherLabelBoundary.left >= labelBoundary.left &&
      otherLabelBoundary.left <= labelBoundary.right) ||
    (otherLabelBoundary.right >= labelBoundary.left &&
      otherLabelBoundary.right <= labelBoundary.right)
  );
}

function getOverlap(labelBoundary, otherLabelBoundary) {
  let overlap = {
    left: false,
    right: false,
    top: false,
    bottom: false,
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  };

  const isTopCol =
    labelBoundary.top <= otherLabelBoundary.bottom &&
    labelBoundary.top >= otherLabelBoundary.top;
  const isBottomCol =
    labelBoundary.bottom <= otherLabelBoundary.bottom &&
    labelBoundary.bottom >= otherLabelBoundary.top;
  const isLeftCol =
    labelBoundary.left >= otherLabelBoundary.left &&
    labelBoundary.left <= otherLabelBoundary.right;
  const isRightCol =
    labelBoundary.right >= otherLabelBoundary.left &&
    labelBoundary.right <= otherLabelBoundary.right;
  const inVerticalRegion = checkVerticalRegion(
    labelBoundary,
    otherLabelBoundary
  );
  const inHorizontalRegion = checkHorizontalRegion(
    labelBoundary,
    otherLabelBoundary
  );

  overlap.left = isLeftCol && inVerticalRegion;
  overlap.right = isRightCol && inVerticalRegion;
  overlap.top = isTopCol && inHorizontalRegion;
  overlap.bottom = isBottomCol && inHorizontalRegion;
  overlap.topLeft = isTopCol && isLeftCol;
  overlap.topRight = isTopCol && isRightCol;
  overlap.bottomLeft = isBottomCol && isLeftCol;
  overlap.bottomRight = isBottomCol && isRightCol;

  return overlap;
}

function getLabelBoundary(x, y, box) {
  return {
    left: x,
    right: x + box.width,
    top: y,
    bottom: y + box.height,
  };
}

function getNewCollision(newBoundary, updatableAdj, labels, currentIndex) {
  for (let j = 0; j < labels.length; j++) {
    if (j === currentIndex) continue;

    const otherLabel = labels[j];
    const otherBox = otherLabel.graphic.getBBox();
    const otherAlignAttr = otherLabel.graphic.alignAttr;

    if (otherBox && otherAlignAttr) {
      const adjustmentOther = {
        x: updatableAdj[j]?.x ?? otherAlignAttr.x,
        y: updatableAdj[j]?.y ?? otherAlignAttr.y,
      };

      const otherLabelBoundary = getLabelBoundary(
        adjustmentOther.x,
        adjustmentOther.y,
        otherBox
      );
      const overlap = getOverlap(newBoundary, otherLabelBoundary);
      for (let key in overlap) {
        if (overlap[key] === true) {
          console.log(`Overlap detected with label ${j} at ${key}`);
          return true;
        }
      }
    }
  }
  console.log("No overlaps detected");
  return false;
}

function adjustLabelPositions(chart) {
  const plotAreaBoundary = {
    left: chart.plotLeft,
    right: chart.plotLeft + chart.plotWidth,
    top: chart.plotTop,
    bottom: chart.plotTop + chart.plotHeight,
  };

  let labels = chart.annotations.reduce((acc, annotation) => {
    return acc.concat(annotation.labels);
  }, []);

  let updatableAdj = {};
  let shouldUpdate = false;

  labels.forEach((label, i) => {
    const labelBox = label.graphic.getBBox();
    const alignAttr = label.graphic.alignAttr;
    const markerStart = label.options.markerStart; // Get markerStart if defined
    const markerEnd = label.options.markerEnd; // Get markerEnd if defined

    if (labelBox && alignAttr) {
      const collisionBuffer = 5;

      let adjustments = {
        x: updatableAdj[i]?.x ?? alignAttr.x,
        y: updatableAdj[i]?.y ?? alignAttr.y,
      };

      const labelBoundary = getLabelBoundary(
        adjustments.x,
        adjustments.y,
        labelBox
      );

      // Check for edge collisions, now passing markerStart and markerEnd
      adjustments = checkEdgeCollisions(
        plotAreaBoundary,
        labelBoundary,
        collisionBuffer,
        alignAttr,
        adjustments,
        markerStart,
        markerEnd
      );

      updatableAdj[i] = { ...adjustments };

      // Checking overlaps with other labels
      labels.forEach((otherLabel, j) => {
        if (i === j) return;

        const otherBox = otherLabel.graphic.getBBox();
        const otherAlignAttr = otherLabel.graphic.alignAttr;

        if (otherBox && otherAlignAttr) {
          let adjustmentOther = {
            x: updatableAdj[j]?.x ?? otherAlignAttr.x,
            y: updatableAdj[j]?.y ?? otherAlignAttr.y,
          };

          const otherLabelBoundary = getLabelBoundary(
            adjustmentOther.x,
            adjustmentOther.y,
            otherBox
          );

          const overlap = getOverlap(labelBoundary, otherLabelBoundary);

          if (overlap.topRight) {
            // Handle collision in the top-right region
            const hrColLength = labelBoundary.right - otherLabelBoundary.left;
            let newX = hrColLength + 10; // Overlap buffer
            if (labelBoundary.left - newX > plotAreaBoundary.left) {
              adjustments.x = adjustments.x - newX;
            } else {
              adjustmentOther.y = adjustmentOther.y + newX;
            }
          } else if (overlap.topLeft) {
            // Handle collision in the top-left region
            const colLength = otherLabelBoundary.bottom - labelBoundary.top;
            const adY = colLength + 10;
            adjustments.y = adjustments.y + adY;
          }
          // Continue checking other overlap regions...

          updatableAdj[i] = { ...adjustments };
          updatableAdj[j] = { ...adjustmentOther };
        }
      });
    }

    if (i === labels.length - 1) {
      shouldUpdate = true;
    }
  });

  if (shouldUpdate) {
    Object.keys(updatableAdj).forEach((k) => {
      labels[k].graphic.attr(updatableAdj[k]);
    });
  }
}

var optionsStub;
var templateDataSettings = {};

var pluginCode = {};

function modifyOptions() {
  if (options.data && !options.data.complete) {
    options.data.complete = function (chartOptions) {
      const keys = Object.keys(templateDataSettings || {});
      keys.forEach(function (key) {
        const serie = chartOptions.series[key];
        (serie.data || []).forEach(function (d, i) {
          if (
            templateDataSettings[key].data &&
            templateDataSettings[key].data[i]
          ) {
            everviz.merge(d, templateDataSettings[key].data[i]);
          }
        });
      });

      if (options && options.chart && options.chart.type === "packedbubble") {
        chartOptions.series.forEach((series) => {
          series.data = series.data.filter((point) => point.value);
        });
      }

      return chartOptions;
    };
  }

  optionsStub = everviz.createStub(options);
  everviz.merge(options, pluginCode);
  if ("Chart" === "Map") everviz.modifyMapType(options);
}

var chart;
var encodedUrl = encodeURI("https://https://app.everviz.com//show/dyyeqorPH");

modifyOptions();

if (
  window["everviz"] &&
  window["everviz"].tooltipFormatter &&
  options.everviz &&
  options.everviz.tooltip
) {
  if (!options.tooltip) options.tooltip = {};
  options.tooltip.formatter = window["everviz"].tooltipFormatter;
}

if (options.yAxis && options.yAxis.length === 1)
  options.yAxis = options.yAxis[0];
if (options.xAxis && options.xAxis.length === 1)
  options.xAxis = options.xAxis[0];
if (options.zAxis && options.zAxis.length === 1)
  options.zAxis = options.zAxis[0];

if (options && (options.lang || options.global)) {
  Highcharts.setOptions({
    global: options.global || {},
    lang: options.lang || {},
  });
}

if (Highcharts.Annotation) {
  Highcharts.Annotation.ControlPoint.prototype.redraw = function (animation) {
    this.graphic[animation ? "animate" : "attr"](
      this.options.positioner
        ? this.options.positioner.call(this, this.target)
        : null
    );
  };
}

function resizeChart(chart) {
  var setHeight = function () {
    chart.setSize(window.innerWidth, window.innerHeight);

    function postParentMessage(type, data) {
      parent.postMessage(
        Object.assign(
          {
            type: type,
          },
          data
        ),
        "*"
      );
    }

    postParentMessage("everviz-dimensions", {
      width: document.body.scrollWidth,
      height: chart.chartHeight + (300 - chart.plotHeight),
      uuid: "dyyeqorPH",
    });
  };

  window.addEventListener("load", setHeight);
  window.addEventListener("resize", setHeight);

  setHeight();
}

const chartWidth = options && options.chart && options.chart.width;
const chartHeight = options && options.chart && options.chart.height;
if (!chartWidth && !chartHeight) {
  everviz.merge(options, {
    chart: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });
}

if (everviz && everviz.pendingIframeAnim) {
  chart = new Highcharts.Chart("container", optionsStub);
  everviz.pendingIframeAnim({
    id: "container",
    loaded: false,
    options: options,
    appear: function () {
      window.everviz.disconnectResizeObserver(chart);
      chart.destroy();
      chart = new Highcharts.Chart("container", options, resizeChart);
    },
    element: document.querySelector("#container"),
  });
} else {
  new Highcharts.Chart("container", options, resizeChart);
}

// Analytics?
window.HighchartsCloud = {
  externalCSS: [
    "https://app.everviz.com/resources/css/highcharts-small-screen-annotations.css",
    ,
    "https://app.everviz.com/fonts/cAMLbHmJ2/font.css",
    ,
    "https://app.everviz.com/static/fonts/gordita/style.css",
  ],
};
