import React, { Component } from 'react';
import './excerciseChart.component.scss';
import $ from 'jquery';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import * as ExportData from 'highcharts/modules/export-data';
import { IExcerciseChartState, IState } from '../../../redux/interfaces';
import { connect } from 'react-redux';
import { excerciseChartActions } from '../../../redux/actions/excerciseChart.action';
import { appClient } from '../../../axios/app.client';
import { store } from '../../../redux/Store';
import { async } from 'q';
import Axios from 'axios';
import workoutInfo from '../../../resources/workoutResourcesModule';

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
interface IExcerciseChartProps{
  excerciseChartState: IExcerciseChartState;
  updateExcerciseChartProps: (newState: IExcerciseChartState) => void
}


class ExcerciseChartComponent extends React.Component<IExcerciseChartProps, any> {

  

  componentDidMount() {
    const storeState = store.getState();
    console.log('store.state');
    console.log(storeState);
    this.fetchChartData(storeState.session.user.id, 'Running').then((value) => {
      const hc = this.setUpChart(value);
      // push to end of stack so chart is done with its render before trying to reflow it
      hc.reflow();
    })  
    this.fetchChartData(storeState.session.user.id, 'Running').then((value) => {
      const hc = this.setUpChart(value);
      // push to end of stack so chart is done with its render before trying to reflow it
      hc.reflow();
    });
  }
  

  fetchChartData = async (userId: number, excerciseType: string): Promise<IExcerciseChartState> => {
    let res = await appClient.get(`/history/user/${userId}/exercise/${excerciseType}`);
    // console.log('res.data');
    // console.log(res.data);
    // console.log('store state');
    // console.log(store.getState());
    let result = {workoutType: 'none', excerciseData: [[0, 1], [9999999999999, 1]]}
    if(res.data){
      const workoutType = excerciseType;
      const excerciseData = (res.data as any[]).map((element) => {
        return [element.occourred, element.units];
      });
      result = {workoutType: workoutType, excerciseData: excerciseData};
    }
    return result ;
  }

  workoutTypes = ['benchPress', 'biking', 'curls',
    'deadLift', 'pullUps', 'pushUps', 'running',
    'sitUps', 'squats', 'swimming' ];

  setUpChart = ( workoutHistory: any): Highcharts.Chart => {

    const textStyle = {
      style: {
        fontFamily: 'monospace',
        color: 'rgba(225, 255, 255, 1)'
      }
    };

    workoutHistory.excerciseData = (workoutHistory.excerciseData as number[][]).sort((a, b) => {return +a[0] - +b[0]});
    console.log('workoutHistory');
    console.log(workoutHistory);

    let workoutIconButtons = ''
    for (const key in workoutInfo) {
      if (workoutInfo.hasOwnProperty(key)) {
        const icon = workoutInfo[key];        
        workoutIconButtons += `<button class="btn"><img src=${icon} /></button>`;
      }
    }

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
        useHTML: true,
        text: workoutIconButtons,
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
        name: workoutHistory.workoutType + ' score',
        data: workoutHistory.excerciseData as any
      }]
    });
  }



  render() {
    return(
      <>
        <div id='history-full'>
          <div id='history-label'><strong>MY PROGRESS</strong></div>
          <div id='history-holder'>
            <div id='history-graph'></div>
          </div>
          <div id='history-buttons'><strong>MY PROGRESS</strong></div>
        </div>
      </>
    );
  }

}



const mapStateToProps = (state: IState) => {
  return {
    excerciseChartState: state.excerciseChartState
  };
};

const mapDispatchToProps = { 
  ...excerciseChartActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ExcerciseChartComponent);








