import React, { Component } from 'react';
import './submitExercise.scss';

export class SubmitExerciseComponent extends React.Component<any, any> {
  render() {
    return (
      <div id='submit'>
        <h1>Submit Exercise Component!</h1>
          <div className='form-holder'>
              <form>
                  <table>
                      <thead>

                      </thead>
                      <tbody>
                          <tr>
                              <td>Running</td>
                              <td><input  type='number' step='.1' min='0' placeholder='0' name='Running' id='Running'/>Km</td>
                          </tr>
                          <tr>
                              <td>Biking</td>
                              <td><input  type='number' step='.1' min='0' placeholder='0' name='Biking' id='Biking'/>Km</td>
                          </tr>
                          <tr>
                              <td>Swimming</td>
                              <td><input  type='number' step='.1' min='0' placeholder='0' name='Swimming' id='Swimming'/>Km</td>
                          </tr>
                          <tr>
                              <td>Curls</td>
                              <td>
                                <input  type='number' step='.1' min='0' placeholder='0' name='CurlLbs' id='CurlLbs'/>Lbs<br/>
                                <input  type='number' step='1' min='0' placeholder='0' name='CurlReps' id='CurlReps'/>Reps
                              </td>
                          </tr>
                          <tr>
                              <td>Bench Press</td>
                              <td>
                                <input  type='number' step='.1' min='0' placeholder='0' name='BenchLbs' id='BenchLbs'/>Lbs<br/>
                                <input  type='number' step='1' min='0' placeholder='0' name='BenchReps' id='BenchReps'/>Reps
                              </td>
                          </tr>
                          <tr>
                              <td>Deadlift</td>
                              <td>
                                <input  type='number' step='.1' min='0' placeholder='0' name='DeadliftLbs' id='DeadliftLbs'/>Lbs<br/>
                                <input  type='number' step='1' min='0' placeholder='0' name='DeadliftReps' id='DeadliftReps'/>Reps
                              </td>
                          </tr>
                          <tr>
                              <td>Pushups</td>
                              <td><input  type='number' step='1' min='0' placeholder='0' name='Pushups' id='Pushups'/></td>
                          </tr>
                          <tr>
                              <td>Squats</td>
                              <td><input  type='number' step='1' min='0' placeholder='0' name='Squats' id='Squats'/></td>
                          </tr>
                          <tr>
                              <td>Situps</td>
                              <td><input  type='number' step='1' min='0' placeholder='0' name='Situps' id='Situps'/></td>
                          </tr>
                          <tr>
                              <td>Pullups</td>
                              <td><input  type='number' step='1' min='0' placeholder='0' name='Pullups' id='Pullups'/></td>
                          </tr>
                          <tr>
                              <td colSpan={2} className='center'><p id='WorkoutError' className='error'>&nbsp;</p></td>
                          </tr>
                          <tr>
                              <td colSpan={2} className='center'><input type='submit' value='Submit'/></td>
                          </tr>
                      </tbody>
                  </table>
              </form>
          </div>
      </div>
    );
  }
}