width = 960;
height = 600;

const svg = d3.select("#map1Area")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

var path = d3.geoPath();

d3.json("./PLANS2100-topo.json", function(error, tx) {
  if (error) throw error;

  var featureCollection = topojson.feature(tx, tx.objects.PLANS2100)

  var bounds = d3.geoBounds(featureCollection);
  
  var centerX = d3.sum(bounds, function(d) {return d[0];}) / 2,
      centerY = d3.sum(bounds, function(d) {return d[1];}) / 2;

  var projection = d3.geoMercator()
    .scale(1)
    .center([centerX, centerY]);

  // var projection = d3.geoIdentity()
  //  .reflectY(true)
  //  .fitSize([width,height],geojsonObject);
    
  path.projection(projection);
  
  svg.append("g")
      .attr("class", "District")
    .selectAll("path")
    .data(featureCollection.features)
    .enter().append("path")
      .attr("d", path);

  svg.append("path")
      .attr("class", "District-borders")
      .attr("d", path(topojson.mesh(tx, tx.objects.PLANS2100, function(a, b) { return a !== b; })));
});