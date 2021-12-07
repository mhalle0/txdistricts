import * as d3 from "d3";
import { d3tip, d3functor } from "./d3-tip.js";
import * as topojson from "topojson-client";
import * as districts from "./district-summaries";

let map1width = document.getElementById('map1Area').clientWidth;
let map1height = map1width;
// let map2width = document.getElementById('map2Area').clientWidth;
let map2width = 2;
let map2height = map1width;

const PLANS2100 = require('./topo/PLANS2100.json');
const map1svg = d3.select("#map1Area")
                  .append("svg")
                  .attr("width", map1width)
                  .attr("height", map1height);

function drawMap(canvas: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>, map: any, mapID: number) {
  let mapFeature: any = (mapID === 2168) ? topojson.feature(map, map.objects.PLANS2168)
                                         : topojson.feature(map, map.objects.PLANS2100);
  let projectionSize: [number, number] = (mapID === 2168) ? [map2width, map2height]
                                                          : [map1width, map2height];                            
  let projection = d3.geoIdentity()
                     .reflectY(true)
                     .fitSize(projectionSize, mapFeature);
  let incrementMap = 0;
  let path = d3.geoPath().projection(null);
  let bounds = d3.geoBounds(map);
  let centerX = d3.sum(bounds, function(d) {return d[0];}) / 2,
      centerY = d3.sum(bounds, function(d) {return d[1];}) / 2;

  path.projection(projection);

  canvas.append("g")
          .attr("class", "District")
        .selectAll("path")
        .data(mapFeature.features)
        .enter().append("path")
          .attr("d", path)
          .attr("id", function() {
            incrementMap += 1;
            return "M" + mapID.toString() + "-" + incrementMap.toString(); 
          })
          .each(function(d) {
            /* @ts-ignore */
            return shadeDistrict(d.properties.District, "party", false);
          })
          .on("mouseover", function(d) {
            return shadeDistrict(d.target.__data__.properties.District, "party", true);
          })
          .on("mouseout", function(d) {
            return shadeDistrict(d.target.__data__.properties.District, "party", false);
          })
}

function matchDistrict(id: string): districts.DistrictSummary {
  if(id.length > 2) return districts.ds2100.find(elem => elem.id === id);
  else return districts.ds2100.find(elem => elem.id === "M2100-" + id);
}

/** 
 * @param mode - "party" for colors based on the victory margin of the previous election
*/
function shadeDistrict(district: string, mode: string, highlight: boolean): void {
  let color: string; 
  let opacity: number;
  let match = matchDistrict(district);
  let blank = "#222222";

  if(mode === "party") color = match.shade();
  else {
    console.error("shadeDistrict() -- invalid mode parameter");
    color = blank;
  }
  
  highlight ? opacity = 0.5 : opacity = 1;

  map1svg.select("#" + match.id)
         .style("fill", color)
         .attr("opacity", opacity)
}

/* @ts-ignore */
let districtTip = d3tip().attr('class', 'd3-tip').html(function(d) { return d; }) 
                         .offset([-5, 0]) 
                         .html(function(d: any) {
                           let district = d.target.__data__.properties.District;
                           let dsm = matchDistrict(district);
                           return `District ${district}<br>
                                   Sen. ${dsm.rep} (${dsm.displayParty("short")})<br>
                                   ${dsm.displayParty("long")} +${dsm.victory()}`
                          });

drawMap(map1svg, PLANS2100, 2100);
map1svg.call(districtTip);