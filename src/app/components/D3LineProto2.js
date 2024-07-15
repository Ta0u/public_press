"use client"
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const D3LineProto2 = ( {Senval , environment} ) => {
  const ref = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 500 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //Read the data
  
   d3.json(`/api/sqlget2/${environment}`).then(
     function(data){
          data.forEach(function(d) {
          console.log(Senval);
          d.date = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(d.Datetime);
          d.Sen1 = +d.sen1;
          d.Sen2 = +d.sen2;
          d.Sen3 = +d.sen3;
          d.Sen4 = +d.sen4;
          d.Sen5 = +d.sen5;
          d.Sen6 = +d.sen6;
          switch(Senval){
            case "Sen1": d.Senval = d.Sen1; break;
            case "Sen2": d.Senval = d.Sen2; break;
            case "Sen3": d.Senval = d.Sen3; break;
            case "Sen4": d.Senval = d.Sen4; break;
            case "Sen5": d.Senval = d.Sen5; break;
            case "Sen6": d.Senval = d.Sen6; break;
            default: d.Senval = d.Sen1;
          }
        });
       console.log(data);
          // Add X axis --> it is a date format
         // var Sensorvalue = JSON.stringify(Senval);
         // console.log(Sensorvalue);
          const x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([0, width]);
          let xAxis = svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));
            

          // Add Y axis
          const y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.Senval; })])
            .range([height, 0]);
          let yAxis = svg.append("g")
            .call(d3.axisLeft(y));

// Add a clipPath: everything out of this area won't be drawn.
    const clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("y", 0);

    // Add brushing
    const brush = d3.brushX()                   // Add the brush feature using the d3.brush function
        .extent( [ [0,0], [width,height] ] )  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
        .on("end", updateChart)               // Each time the brush selection changes, trigger the 'updateChart' function

    // Create the line variable: where both the line and the brush take place
    const line = svg.append('g')
      .attr("clip-path", "url(#clip)")

          // Add the line
          line.append("path")
            .datum(data)
            .attr("class","line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return y(d.Senval) })
            )

  // Add the brushing
    line
      .append("g")
        .attr("class", "brush")
        .call(brush);

    // A function that set idleTimeOut to null
    let idleTimeout
    function idled() { idleTimeout = null; }

    // A function that update the chart for given boundaries
    function updateChart(event,d) {

      // What are the selected boundaries?
      let extent = event.selection

      // If no selection, back to initial coordinate. Otherwise, update X axis domain
      if(!extent){
        if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
        x.domain([ 4,8])
      }else{
        x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
        line.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
      }

      // Update axis and line position
      xAxis.transition().duration(1000).call(d3.axisBottom(x))
      line
          .select('.line')
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.Senval) })
          )
    }

    // If user double click, reinitialize the chart
    svg.on("dblclick",function(){
      x.domain(d3.extent(data, function(d) { return d.date; }))
      xAxis.transition().call(d3.axisBottom(x))
      line
        .select('.line')
        .transition()
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.Senval) })
      )
    });
  })
}, []);

  return <svg width={500} height={350} id="Linechart" ref={ref} />;
};

export default D3LineProto2
