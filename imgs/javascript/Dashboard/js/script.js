var svg = d3.select("#grafico2"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

/* const color1 = "#F00000"
const color2 = "#20F0F0"
var color = d3.scaleOrdinal([color1, color2]); */
const color1 = "#21A366"
const color2 = "#F00000"
const color = d3.scaleOrdinal([color2, color1]);

var pie = d3.pie()
    .padAngle(0.01)
    .sort(null)
    .value(function(d) { return d.dados; });
var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 70)
    .innerRadius(radius - 70);

d3.csv("data.csv", function(d) {
  d.dados =+ d.dados;
  return d;
}, function(error, data) {
  if (error) throw error;

  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");


  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.grupo); });

  arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.grupo; });
});