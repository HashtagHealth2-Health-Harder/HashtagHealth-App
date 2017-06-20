import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapBubble } from 'react-d3-map-bubble';
import { mesh, feature } from 'topojson-client';
import { fetchTweets } from '../actions';
import world from '../data/world-50m.json';
import test from '../data/test.json';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    }
    
    this._tick = this._tick.bind(this);
  }
  
  componentWillMount() {
    this.props.dispatch(fetchTweets());
  }
  
  componentDidMount() {
    this.interval = setInterval(this._tick, 15000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  _tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }
  
  render() {  
    const data = this.props.data;
    const width = 960;
    const height = 660;      
    const countries = mesh(world, world.objects.countries, function(a, b) { return a !== b; });
    const land = feature(world, world.objects.land);
    const meshClass = 'border';
    const polygonClass = 'land';

    const domain = {
      scale: 'sqrt',
      domain: [0, 1e6],
      range: [0, 50]
    };
    
    console.log(data);

    let circles = test;    
    let circleValue = function(d) { return 10000; };
    let circleX = function(d) { return +d.lng };
    let circleY = function(d) { return +d.lat };

    var scale = (width + 1) / 2 / Math.PI;
    var translate = [width / 2, height / 2];
    var precision = .1;
    var projection = 'mercator';
    
    var tooltipContent = function(d) { 
      delete d.cell;
      return d; 
    }
    
    return (
      <MapBubble 
        width= {width}
        height= {height}
        dataPolygon= {land}
        polygonClass= {polygonClass}
        dataMesh= {countries}
        meshClass = {meshClass}
        domain= {domain}
        dataCircle= {circles}
        circleValue= {circleValue}
        circleClass= {'bubble'}
        circleX= {circleX}
        circleY= {circleY}
        projection= {projection}
        precision= {precision}
        translate= {translate}
        scale= {scale}
        tooltipContent= {tooltipContent}
        showGraticule= {true}
        showTooltip= {true}
        showLegend= {false}
      />
    );
    
  }
}

function mapStateToProps(state) {
  const tweets = state.tweets;
  return {
    tweets
  }
}

export default connect(mapStateToProps)(Map);
