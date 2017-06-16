import React, { Component } from 'react';
import { MapBubble } from 'react-d3-map-bubble';
import { mesh, feature } from 'topojson-client';
import us from '../data/us.json';

export default class App extends Component {
  render() {
    const width = 1200;
    const height = 900;
        
    var dataStates = mesh(us, us.objects.states, function(a, b) { return a !== b; });
    var dataCounties = feature(us, us.objects.nation);
    
    var meshClass = 'border';
    var polygonClass = 'land';

    var domain = {
      scale: 'sqrt',
      domain: [0, 1e6],
      range: [0, 15]
    };
    
    var circles = feature(us, us.objects.counties).features.sort(function(a, b) { 
      return b.properties.population - a.properties.population; 
    });
    
    var circleValue = function(d) { 
      return +d.properties.population; 
    };
    
    var projection = 'null';

    var tooltipContent = function(d) {
      return d.properties;
    }
    
    return (
      <div>
        <h1>#HASHTAG-HEALTH BRUH</h1>
        <MapBubble 
          width={width}
          height={height}
          dataPolygon= {dataCounties}
          polygonClass= {polygonClass}
          dataMesh= {dataStates}
          meshClass = {meshClass}
          domain= {domain}
          dataCircle= {circles}
          circleValue= {circleValue}
          circleClass= {'bubble'}
          projection= {projection}
          tooltipContent= {tooltipContent}
          showGraticule= {false}
          showTooltip= {true}
          showLegend= {true}
        />
      </div>
    );
  }
}
