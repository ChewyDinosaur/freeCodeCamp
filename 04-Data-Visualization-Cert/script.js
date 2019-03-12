document.addEventListener("DOMContentLoaded", function() {
  let dataset = [];
  const chartWidth = 750;
  const chartHeight = 400;
  const req = new XMLHttpRequest();

  // Get the dataset
  req.open(
    "GET",
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
    true
  );
  req.send();
  req.onload = function() {
    json = JSON.parse(req.responseText);
    dataset = json.data;
    console.log(dataset);
    createBarChart();
  };

  function createBarChart() {
    const padding = 5;
    const xScale = d3
      .scaleLinear()
      .domain([0, 25])
      .range([padding, chartWidth - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d[1])])
      .range([chartHeight - padding, padding]);

    const svg = d3
      .select("#bar-chart")
      .append("svg")
      .attr("width", chartWidth)
      .attr("height", chartHeight);

    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", xScale)
      .attr("y", 0)
      .attr("width", xScale(5))
      .attr("height", d => yScale(d[1]));
  }
});
