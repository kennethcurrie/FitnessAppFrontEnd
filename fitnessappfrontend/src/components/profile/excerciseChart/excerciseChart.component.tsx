import React, { Component } from 'react';
import './excerciseChart.component.scss';
import $ from 'jquery';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import * as ExportData from 'highcharts/modules/export-data';



/*
A profile is the home page for the average user.
The profile gives an overview of ...
  -*a profile picture
  -*basic info/stats
  -*a short about me (goals)
  -last 3 excersises
  -a section to add a new excersise to history
  -top 3 friends
  -show a graph displaying ratios of types of excersise, with lables

*/
interface IExcerciseChartProps {
  workoutType: string;
  excerciseData: number[][];
}

export class ExcerciseChartComponent extends React.Component<IExcerciseChartProps, any> {


  componentDidMount() {
    const hc = this.updateChart();
    // push to end of stack so chart is done with its render before trying to reflow it
    setTimeout(() => hc.reflow(), 0);
  }

updateChart = ( ): Highcharts.Chart => {

  const textStyle = {
    style: {
      fontFamily: 'monospace',
      color: 'rgba(225, 255, 255, 1)'
    }
  };
  return Highcharts.chart( {
    chart: {
      renderTo: 'history-graph',
      zoomType: 'x',
      ...textStyle,
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
            [0, 'rgba(100, 25, 255, .0)'],
            [1, 'rgba(200, 200, 255, .0)']
        ]
      }
    },
    title: {
      text: this.props.workoutType + ' History',
      ...textStyle
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
      ...textStyle
    },
    xAxis: {
      type: 'datetime',
      labels: {...textStyle}
    },
    yAxis: {
      title: {
        text: 'score',
      ...textStyle,
      },
      labels: {...textStyle}
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(100, 25, 255, .9)'],
            [1, 'rgba(127, 255, 212, .6)']
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        }
      }
    },

    series: [{
      type: 'area',
      name: this.props.workoutType + ' score',
      data: this.props.excerciseData as any
    }]
  });
}



  render() {
    return(
      <>
        <div id='history-full'>
          <div id='history-label'><strong>MY PROGRESS</strong></div>
          <div id='history-holder'>
            <div className='bound-img'><div id='history-graph'></div></div>
          </div>
        </div>
      </>
    );
  }

}