var width = document.getElementById('map1Area').clientWidth;
var height = width;

const svg = d3.select("#map1Area")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

var path = d3.geoPath().projection(null);

d3.json("./PLANS2100-topo.json").then(function(tx) {
   
  var featureCollection = topojson.feature(tx, tx.objects.PLANS2100)

  var bounds = d3.geoBounds(featureCollection);
  
  var centerX = d3.sum(bounds, function(d) {return d[0];}) / 2,
      centerY = d3.sum(bounds, function(d) {return d[1];}) / 2;

  var projection = d3.geoIdentity()
   .reflectY(true)
   .fitSize([width,height], featureCollection);
    
  path.projection(projection);
  
  svg.append("g")
      .attr("class", "District")
    .selectAll("path")
    .data(featureCollection.features)
    .enter().append("path")
      .attr("d", path);

}).catch(function(error) { 
  console.log(error);
});