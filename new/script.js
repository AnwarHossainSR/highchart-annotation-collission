var options = {
  render: function () {
    handleAnnotationPositioning(this);
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
          overflow: "none",
          crop: false,
          format: "annotation 2",
          uniqueId: "highcharts-jm26opz-352",
          x: 69,
          y: -89,
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
          overflow: "none",
          crop: true,
          format: "annotation 3",
          uniqueId: "highcharts-jm26opz-359",
          x: -63,
          y: -60,
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
          overflow: "none",
          crop: true,
          format: "annotation 4",
          uniqueId: "highcharts-jm26opz-366",
          x: -158,
          y: -12,
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
          overflow: "none",
          crop: true,
          format: "annotation 5",
          uniqueId: "highcharts-jm26opz-373",
          x: -168,
          y: 0,
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
          overflow: "none",
          crop: true,
          format: "annotation 6",
          uniqueId: "highcharts-jm26opz-380",
          x: -66,
          y: -108,
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
          overflow: "none",
          crop: true,
          format: "annotation 7",
          uniqueId: "highcharts-jm26opz-387",
          x: 71,
          y: -73,
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
          overflow: "none",
          crop: true,
          format: "annotation 1",
          uniqueId: "highcharts-jm26opz-396",
          x: -101,
          y: 39,
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
          overflow: "none",
          crop: true,
          format: "annotation 8",
          uniqueId: "highcharts-jm26opz-424",
          everviz: { text: { showKeyOnMobile: { enabled: true } } },
          style: { fontSize: 11 },
          x: 96,
          y: -84,
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
  handleAnnotationPositioning(chart);
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

// Define configuration constants for annotation positioning
const CONFIG = {
  SPACING: {
    MIN_VERTICAL: 10, // Minimum vertical space between annotations
    MIN_HORIZONTAL: 10, // Minimum horizontal space between annotations
    EDGE_BUFFER: 10, // Minimum space from plot edges
  },
  COLLISION: {
    MAX_ITERATIONS: 50, // Maximum attempts to resolve collisions
    MOVE_STEP: 10, // Distance to move labels during collision resolution
    DIRECTIONS: [
      { x: 1, y: 0 }, // Right movement
      { x: -1, y: 0 }, // Left movement
      { x: 0, y: 1 }, // Down movement
      { x: 0, y: -1 }, // Up movement
      { x: 1, y: 1 }, // Down-right diagonal
      { x: -1, y: 1 }, // Down-left diagonal
      { x: 1, y: -1 }, // Up-right diagonal
      { x: -1, y: -1 }, // Up-left diagonal
    ],
  },
};

/**
 * Main function to handle positioning of annotations on the chart
 * @param {Object} chart - The chart object containing annotations
 */
function handleAnnotationPositioning(chart) {
  // Exit if no annotations exist
  if (!chart?.annotations?.length) return;

  // Define the boundaries of the plot area
  const plotBounds = {
    left: chart.plotLeft,
    right: chart.plotLeft + chart.plotWidth,
    top: chart.plotTop,
    bottom: chart.plotTop + chart.plotHeight,
  };

  // Extract all label objects from annotations and filter out invalid ones
  const labels = chart.annotations
    .reduce((acc, annotation) => acc.concat(annotation.labels), [])
    .filter((label) => label?.graphic);

  // Create a Map storing position and dimension data for each label
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
          anchorX: label.options.point.x, // Original anchor point X
          anchorY: label.options.point.y, // Original anchor point Y
        },
      ];
    })
  );

  // Main collision resolution loop
  for (
    let iteration = 0;
    iteration < CONFIG.COLLISION.MAX_ITERATIONS;
    iteration++
  ) {
    let hasCollision = false;

    // Check each label against all other labels
    for (let i = 0; i < labels.length; i++) {
      const labelA = labels[i];
      const posA = labelData.get(labelA);

      // Ensure label stays within plot bounds
      posA.x = clamp(
        posA.x,
        plotBounds.left + CONFIG.SPACING.EDGE_BUFFER,
        plotBounds.right - posA.width - CONFIG.SPACING.EDGE_BUFFER
      );
      posA.y = clamp(
        posA.y,
        plotBounds.top + CONFIG.SPACING.EDGE_BUFFER,
        plotBounds.bottom - posA.height - CONFIG.SPACING.EDGE_BUFFER
      );

      // Compare with all subsequent labels
      for (let j = i + 1; j < labels.length; j++) {
        const labelB = labels[j];
        const posB = labelData.get(labelB);

        // If collision detected, attempt to resolve
        if (checkCollision(posA, posB)) {
          hasCollision = true;

          // Try different directions to resolve collision
          let resolved = false;
          for (const dir of CONFIG.COLLISION.DIRECTIONS) {
            const newPosA = {
              x: posA.x + dir.x * CONFIG.COLLISION.MOVE_STEP,
              y: posA.y + dir.y * CONFIG.COLLISION.MOVE_STEP,
              width: posA.width,
              height: posA.height,
            };

            // Check if new position is valid
            if (
              isWithinBounds(newPosA, plotBounds) &&
              !checkCollision(newPosA, posB)
            ) {
              posA.x = newPosA.x;
              posA.y = newPosA.y;
              resolved = true;
              break;
            }
          }

          // Use fallback resolution if directional movement failed
          if (!resolved) {
            resolveCollisionWithoutAnchors(posA, posB, plotBounds);
          }
        }
      }
    }
    // Exit loop if no collisions found
    if (!hasCollision) break;
  }

  // Update final positions of all labels
  labels.forEach((label) => {
    const pos = labelData.get(label);
    label.graphic.attr({
      x: pos.x,
      y: pos.y,
      visibility: "visible",
      zIndex: 1000,
    });
  });
}

/**
 * Check if two label positions overlap
 * @param {Object} posA - Position and dimensions of first label
 * @param {Object} posB - Position and dimensions of second label
 * @returns {boolean} True if labels collide
 */
function checkCollision(posA, posB) {
  return !(
    posA.x + posA.width + CONFIG.SPACING.MIN_HORIZONTAL < posB.x ||
    posB.x + posB.width + CONFIG.SPACING.MIN_HORIZONTAL < posA.x ||
    posA.y + posA.height + CONFIG.SPACING.MIN_VERTICAL < posB.y ||
    posB.y + posB.height + CONFIG.SPACING.MIN_VERTICAL < posA.y
  );
}

/**
 * Resolve collision between two labels by moving them apart
 * @param {Object} posA - Position of first label
 * @param {Object} posB - Position of second label
 * @param {Object} plotBounds - Chart plot area boundaries
 */
function resolveCollisionWithoutAnchors(posA, posB, plotBounds) {
  // Calculate centers of both labels
  const centerA = { x: posA.x + posA.width / 2, y: posA.y + posA.height / 2 };
  const centerB = { x: posB.x + posB.width / 2, y: posB.y + posB.height / 2 };

  // Calculate direction vector between centers
  const dx = centerB.x - centerA.x;
  const dy = centerB.y - centerA.y;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  // Calculate minimum required separation
  const minDistance =
    (posA.width + posB.width) / 2 + CONFIG.SPACING.MIN_HORIZONTAL;

  // Resolve overlap if needed
  if (distance < minDistance) {
    const nx = dx / distance;
    const ny = dy / distance;
    const overlap = minDistance - distance;

    // Move labels apart
    posA.x -= overlap * nx;
    posA.y -= overlap * ny;
    posB.x += overlap * nx;
    posB.y += overlap * ny;

    // Ensure labels remain within bounds
    posA.x = clamp(
      posA.x,
      plotBounds.left + CONFIG.SPACING.EDGE_BUFFER,
      plotBounds.right - posA.width - CONFIG.SPACING.EDGE_BUFFER
    );
    posA.y = clamp(
      posA.y,
      plotBounds.top + CONFIG.SPACING.EDGE_BUFFER,
      plotBounds.bottom - posA.height - CONFIG.SPACING.EDGE_BUFFER
    );
    posB.x = clamp(
      posB.x,
      plotBounds.left + CONFIG.SPACING.EDGE_BUFFER,
      plotBounds.right - posB.width - CONFIG.SPACING.EDGE_BUFFER
    );
    posB.y = clamp(
      posB.y,
      plotBounds.top + CONFIG.SPACING.EDGE_BUFFER,
      plotBounds.bottom - posB.height - CONFIG.SPACING.EDGE_BUFFER
    );
  }
}

/**
 * Check if a label position is within plot bounds
 * @param {Object} pos - Label position and dimensions
 * @param {Object} bounds - Plot boundaries
 * @returns {boolean} True if position is within bounds
 */
function isWithinBounds(pos, bounds) {
  return (
    pos.x >= bounds.left + CONFIG.SPACING.EDGE_BUFFER &&
    pos.x + pos.width <= bounds.right - CONFIG.SPACING.EDGE_BUFFER &&
    pos.y >= bounds.top + CONFIG.SPACING.EDGE_BUFFER &&
    pos.y + pos.height <= bounds.bottom - CONFIG.SPACING.EDGE_BUFFER
  );
}

/**
 * Utility function to clamp a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {number} Clamped value
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Initialize annotation handling for chart options
 * @param {Object} options - Chart configuration options
 * @returns {Object} Modified options with annotation handling
 */
function addAnnotationHandling(options) {
  // Ensure chart and events objects exist
  if (!options.chart) options.chart = {};
  if (!options.chart.events) options.chart.events = {};

  // Store original render function
  const originalRender = options.chart.events.render || function () {};

  // Add annotation positioning to render event
  options.chart.events.render = function () {
    originalRender.call(this);
    handleAnnotationPositioning(this);
  };

  // Configure annotation labels
  if (options.annotations) {
    options.annotations.forEach((annotation) => {
      if (annotation.labels) {
        annotation.labels.forEach((label) => {
          label.overflow = "none"; // Don't handle overflow
          label.crop = false; // Don't crop labels
          label.allowOverlap = true; // Allow initial overlap
          if (!label.style) label.style = {};
          label.style.zIndex = 1000; // Ensure labels are on top
        });
      }
    });
  }

  return options;
}

// Apply annotation handling to chart options
options = addAnnotationHandling(options);
