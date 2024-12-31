var options = {
  render: function () {
    handleAnnotationPositioning(this);
  },
  title: {
    text: "<div>Custom Chart</div>",
    align: "left",
    style: { fontSize: "18px", fontWeight: "bold" },
    useHTML: true,
  },
  subtitle: {
    text: "consectetur adipiscing elit, sed do eiusmod",
    align: "left",
    style: { fontSize: "13px" },
  },
  colors: ["#FF495E", "#28277E", "#6D5BD1", "#F9DCE7", "#AEC8FA", "#DDD8F5"],
  chart: { style: { fontFamily: "gordita" }, type: "line" },
  credits: { text: "everviz.com", href: "https://www.everviz.com" },
  plotOptions: {
    scatter: { marker: { enabled: true }, lineWidth: 0 },
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
  everviz: { text: { dynamicFonts: true } },
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
    sourceWidth: null,
    sourceHeight: null,
  },
  annotations: [
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 1.6142494561276284,
            y: 3.798861480075901,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            { symbol: "triangle-down", events: {} },
            { symbol: "circle", events: {} },
          ],
          overflow: "none",
          format: "annotation 1",
          uniqueId: "highcharts-ph0roo0-73",
          x: -23,
          y: -80,
          crop: false,
          allowOverlap: true,
          style: {
            zIndex: 1000,
          },
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 1.6142494561276284,
      y: 3.798861480075901,
      id: "a96c7849-a7be-492c-9951-9110233b3886",
      uniqueId: "highcharts-s9qqxcy-73",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 2.0691443074691804,
            y: 5.512333965844402,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            { symbol: "triangle-down", events: {} },
            { symbol: "circle", events: {} },
          ],
          overflow: "none",
          crop: true,
          format: "annotation 2",
          uniqueId: "highcharts-ph0roo0-80",
          x: -110,
          y: 4,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 2.0691443074691804,
      y: 5.512333965844402,
      id: "7ed12ceb-0e13-424f-bb1e-81d99e458c9c",
      uniqueId: "highcharts-s9qqxcy-78",
      draggable: null,
    },
    {
      langKey: "label",
      labelOptions: { format: "Insert Text" },
      labels: [
        {
          shape: "evervizCallout",
          point: {
            x: 2.217077592458303,
            y: 4.675521821631878,
            xAxis: 0,
            yAxis: 0,
          },
          controlPoints: [
            { symbol: "triangle-down", events: {} },
            { symbol: "circle", events: {} },
          ],
          overflow: "none",
          crop: true,
          format: "annotation 3",
          uniqueId: "highcharts-ph0roo0-87",
          x: -104,
          y: 29,
        },
      ],
      animation: { defer: 0 },
      events: {},
      x: 2.217077592458303,
      y: 4.675521821631878,
      id: "24ff15e5-7582-43f3-850e-680848c8e509",
      uniqueId: "highcharts-s9qqxcy-83",
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
    columnTypes: ["number", "number", "number", "number"],
    assignDataFields: [
      { labels: "A", values: "B" },
      { labels: "A", values: "C" },
      { labels: "A", values: "D" },
    ],
  },
  stockTools: { gui: { enabled: false } },
};
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
var encodedUrl = encodeURI(
  "https://https://app-dev.everviz.com//show/5OJQG0-lu"
);

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
  const setHeight = function () {
    chart.setSize(window.innerWidth, window.innerHeight);
    // adjustAnchorLines(chart); // Adjust anchor lines on resize
    postParentMessage("everviz-dimensions", {
      width: document.body.scrollWidth,
      height: chart.chartHeight + (300 - chart.plotHeight),
      uuid: "5OJQG0-lu",
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
    "https://app.everviz.com/static/fonts/gordita/style.css",
  ],
};

// Configuration for annotation positioning
const CONFIG = {
  SPACING: {
    MIN_VERTICAL: 30,
    MIN_HORIZONTAL: 35,
    EDGE_BUFFER: 20,
  },
  COLLISION: {
    MAX_ITERATIONS: 50,
    MOVE_STEP: 15,
    // DIRECTIONS: [
    //   { x: 1, y: 0 },
    //   { x: -1, y: 0 },
    //   { x: 0, y: 1 },
    //   { x: 0, y: -1 },
    //   { x: 1, y: 1 },
    //   { x: -1, y: 1 },
    //   { x: 1, y: -1 },
    //   { x: -1, y: -1 },
    // ],
  },
};

function handleAnnotationPositioning(chart) {
  if (!chart?.annotations?.length) return;

  const plotBounds = {
    left: chart.plotLeft,
    right: chart.plotLeft + chart.plotWidth,
    top: chart.plotTop,
    bottom: chart.plotTop + chart.plotHeight,
  };

  const labels = chart.annotations
    .reduce((acc, annotation) => acc.concat(annotation.labels), [])
    .filter((label) => label?.graphic);

  const labelData = new Map(
    labels.map((label) => {
      const bbox = label.graphic.getBBox();
      const pos = label.graphic.alignAttr;
      return [
        label,
        {
          x: pos.x,
          y: pos.y,
          width: bbox.width,
          height: bbox.height,
          anchorX: label.options.point.x, // Store anchor position
          anchorY: label.options.point.y, // Store anchor position
        },
      ];
    })
  );

  // Collision Resolution Loop
  for (
    let iteration = 0;
    iteration < CONFIG.COLLISION.MAX_ITERATIONS;
    iteration++
  ) {
    let hasCollision = false;
    for (let i = 0; i < labels.length; i++) {
      const labelA = labels[i];
      const posA = labelData.get(labelA);

      for (let j = i + 1; j < labels.length; j++) {
        const labelB = labels[j];
        const posB = labelData.get(labelB);

        if (checkCollision(posA, posB)) {
          hasCollision = true;
          // Set draggable to true for both labels
          console.log("labelA ", labelA);
          console.log("labelB ", labelB);
          labelA.draggable = true;
          labelB.draggable = true;

          // Resolve collision
          // resolveCollisionWithoutAnchors(posA, posB, plotBounds);
        }
      }
    }
    if (!hasCollision) break; // Exit early if no more collisions
  }

  labels.forEach((label) => {
    const pos = labelData.get(label);
    label.graphic.attr({
      x: pos.x,
      y: pos.y,
      visibility: "visible",
      zIndex: 1000,
    });

    // Reset draggable property after handling
    if (label.draggable) {
      label.draggable = null; // Reset draggable after handling
    }
  });
}

function checkCollision(posA, posB) {
  return !(
    posA.x + posA.width + CONFIG.SPACING.MIN_HORIZONTAL < posB.x ||
    posB.x + posB.width + CONFIG.SPACING.MIN_HORIZONTAL < posA.x ||
    posA.y + posA.height + CONFIG.SPACING.MIN_VERTICAL < posB.y ||
    posB.y + posB.height + CONFIG.SPACING.MIN_VERTICAL < posA.y
  );
}

function resolveCollisionWithoutAnchors(posA, posB, plotBounds) {
  const centerA = { x: posA.x + posA.width / 2, y: posA.y + posA.height / 2 };
  const centerB = { x: posB.x + posB.width / 2, y: posB.y + posB.height / 2 };

  const dx = centerB.x - centerA.x;
  const dy = centerB.y - centerA.y;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  const nx = dx / distance;
  const ny = dy / distance;

  const moveX = CONFIG.COLLISION.MOVE_STEP * nx;
  const moveY = CONFIG.COLLISION.MOVE_STEP * ny;

  // Move only the labels, not the anchors
  posA.x = clamp(
    posA.x - moveX / 2,
    plotBounds.left + CONFIG.SPACING.EDGE_BUFFER,
    plotBounds.right - posA.width - CONFIG.SPACING.EDGE_BUFFER
  );
  posA.y = clamp(
    posA.y - moveY / 2,
    plotBounds.top + CONFIG.SPACING.EDGE_BUFFER,
    plotBounds.bottom - posA.height - CONFIG.SPACING.EDGE_BUFFER
  );
  posB.x = clamp(
    posB.x + moveX / 2,
    plotBounds.left + CONFIG.SPACING.EDGE_BUFFER,
    plotBounds.right - posB.width - CONFIG.SPACING.EDGE_BUFFER
  );
  posB.y = clamp(
    posB.y + moveY / 2,
    plotBounds.top + CONFIG.SPACING.EDGE_BUFFER,
    plotBounds.bottom - posB.height - CONFIG.SPACING.EDGE_BUFFER
  );

  // Ensure that the anchors remain fixed
  posA.anchorX = posA.anchorX; // Keep anchorX fixed
  posA.anchorY = posA.anchorY; // Keep anchorY fixed
  posB.anchorX = posB.anchorX; // Keep anchorX fixed
  posB.anchorY = posB.anchorY; // Keep anchorY fixed
}

function getDistanceFromAnchor(pos) {
  const dx = pos.x - pos.anchorX;
  const dy = pos.y - pos.anchorY;
  return Math.sqrt(dx * dx + dy * dy);
}

function isWithinBounds(pos, bounds) {
  return (
    pos.x >= bounds.left + CONFIG.SPACING.EDGE_BUFFER &&
    pos.x + pos.width <= bounds.right - CONFIG.SPACING.EDGE_BUFFER &&
    pos.y >= bounds.top + CONFIG.SPACING.EDGE_BUFFER &&
    pos.y + pos.height <= bounds.bottom - CONFIG.SPACING.EDGE_BUFFER
  );
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function adjustAnchorLines(chart, labelData) {
  console.log("labelData", labelData);
  if (!chart?.annotations?.length) return;

  chart.annotations.forEach((annotation) => {
    annotation.labels.forEach((label) => {
      if (label.shape === "evervizCallout" && labelData.has(label)) {
        const pos = labelData.get(label);
        const anchorX = pos.anchorX;
        const anchorY = pos.anchorY;
        const labelBBox = label.graphic.getBBox();

        label.graphic.attr({ x: pos.x, y: pos.y });

        if (
          label.controlPoints &&
          label.controlPoints.length === 2 &&
          label.controlPoints[0].graphic &&
          label.controlPoints[1].graphic
        ) {
          label.controlPoints[0].graphic.attr({
            x: chart.plotLeft + chart.xAxis[0].toPixels(anchorX),
            y: chart.plotTop + chart.yAxis[0].toPixels(anchorY),
          });
          label.controlPoints[1].graphic.attr({
            x: pos.x + labelBBox.width / 2,
            y: pos.y + labelBBox.height / 2,
          });
        }
      }
    });
  });
}

function addAnnotationHandling(options) {
  if (!options.chart) options.chart = {};
  if (!options.chart.events) options.chart.events = {};

  const originalRender = options.chart.events.render || function () {};

  options.chart.events.render = function () {
    originalRender.call(this);
    handleAnnotationPositioning(this);
  };

  if (options.annotations) {
    options.annotations.forEach((annotation) => {
      if (annotation.labels) {
        annotation.labels.forEach((label) => {
          label.overflow = "none";
          label.crop = false;
          label.allowOverlap = true;
          if (!label.style) label.style = {};
          label.style.zIndex = 1000;
        });
      }
    });
  }

  return options;
}

options = addAnnotationHandling(options);
