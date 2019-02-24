import React, { Component } from 'react';
import { connect } from 'react-redux';
import './submitExercise.scss';
import { IWorkouts, IState } from '../../redux/interfaces';
import * as foo from '../../redux/actions/workouts.action';


interface IProps {
    workoutFields: IWorkouts;
    updateRunning: (distance: number) => void;
    updateSwimming: (distance: number) => void;
    updateBiking: (distance: number) => void;
    updateCurls: (lbs: number, reps: number) => void;
    updateBenchPress: (lbs: number, reps: number) => void;
    updateDeadLift: (lbs: number, reps: number) => void;
    updateSquats: (reps: number) => void;
    updatePushUps: (reps: number) => void;
    updatePullUps: (reps: number) => void;
    updateSitUps: (reps: number) => void;
    submitWorkout: (e: any, workouts: IWorkouts) => void;
}

class SubmitExerciseComponent extends Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

  render() {
    const {
        workoutFields,
        updateRunning, updateBiking, updateSwimming,
        updateCurls, updateBenchPress, updateDeadLift,
        updateSquats, updatePushUps, updatePullUps, updateSitUps
    } = this.props;

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
                                <td><input type='number' value={workoutFields.running} step='.1' min='0' placeholder='0' name='Running' id='Running'
                                    onChange={e => { updateRunning(+e.target.value); }}
                                />Km</td>
                          </tr>
                          <tr>
                              <td>Biking</td>
                                <td><input type='number' value={workoutFields.biking} step='.1' min='0' placeholder='0' name='Biking' id='Biking'
                                    onChange={e => { updateBiking(+e.target.value); }}
                                />Km</td>
                          </tr>
                          <tr>
                              <td>Swimming</td>
                              <td><input  type='number' value={workoutFields.swimming} step='.1' min='0' placeholder='0' name='Swimming' id='Swimming'
                                    onChange={e => { updateSwimming(+e.target.value); }}
                                />Km</td>
                          </tr>
                          <tr>
                              <td>Curls</td>
                              <td>
                                <input type='number' step='.1' value={workoutFields.curls.lbs} min='0' placeholder='0' name='CurlLbs' id='CurlLbs'
                                    onChange={e => { updateCurls(+e.target.value, workoutFields.curls.reps); }}
                                />Lbs<br/> {
                                    workoutFields.curls.lbs > 0 ?
                                    (<><input type='number' step='1' value={workoutFields.curls.reps || '1'} min='1' placeholder='0' name='CurlReps' id='CurlReps'
                                        onChange={e => { updateCurls(workoutFields.curls.lbs, +e.target.value); }}
                                    />Reps</>) : (<></>)
                                }
                              </td>
                          </tr>
                          <tr>
                              <td>Bench Press</td>
                              <td>
                                    <input type='number' step='.1' value={workoutFields.benchPress.lbs} min='0' placeholder='0' name='BenchLbs' id='BenchLbs'
                                        onChange={e => { updateBenchPress(+e.target.value, workoutFields.benchPress.reps); }}
                                    />Lbs<br/> {
                                        workoutFields.benchPress.lbs > 0 ?
                                        (<> <input type='number' step='1' value={workoutFields.benchPress.reps || '1'} min='1' placeholder='0' name='BenchReps' id='BenchReps'
                                            onChange={e => { updateBenchPress(workoutFields.benchPress.lbs, +e.target.value); }}
                                        />Reps </>)  : (<></>)
                                    }
                              </td>
                          </tr>
                          <tr>
                              <td>Deadlift</td>
                              <td>
                                    <input type='number' step='.1' value={workoutFields.deadLift.lbs} min='0' placeholder='0' name='DeadliftLbs' id='DeadliftLbs'
                                        onChange={e => { updateDeadLift(+e.target.value, workoutFields.deadLift.reps); }}
                                    />Lbs<br/> {
                                        workoutFields.deadLift.lbs > 0 ?
                                        (<><input type='number' step='1' value={workoutFields.deadLift.reps || '1'} min='1' placeholder='0' name='DeadliftReps' id='DeadliftReps'
                                            onChange={e => { updateDeadLift(workoutFields.deadLift.lbs, +e.target.value); }}
                                        />Reps</>) : (<></>)
                                    }
                              </td>
                          </tr>
                          <tr>
                              <td>Pushups</td>
                                <td><input type='number' value={workoutFields.pushUps} step='1' min='0' placeholder='0' name='Pushups' id='Pushups'
                                    onChange={e => { updatePushUps(+e.target.value); }}
                                />Rep</td>
                          </tr>
                          <tr>
                              <td>Squats</td>
                                <td><input type='number' value={workoutFields.squats} step='1' min='0' placeholder='0' name='Squats' id='Squats'
                                    onChange={e => { updateSquats(+e.target.value); }}
                                />Rep</td>
                          </tr>
                          <tr>
                              <td>Situps</td>
                                <td><input type='number' value={workoutFields.sitUps} step='1' min='0' placeholder='0' name='Situps' id='Situps'
                                    onChange={e => { updateSitUps(+e.target.value); }}
                              />Rep</td>
                          </tr>
                          <tr>
                              <td>Pullups</td>
                                <td><input type='number' value={workoutFields.pullUps} step='1' min='0' placeholder='0' name='Pullups' id='Pullups'
                                    onChange={e => { updatePullUps(+e.target.value); }}
                              />Rep</td>
                          </tr>
                          <tr>
                              <td colSpan={2} className='center'><p id='WorkoutError' className='error'>&nbsp;</p></td>
                          </tr>
                          <tr>
                              <td colSpan={2} className='center'><input type='submit' value='Submit' onClick={e => {
                                  e.preventDefault();
                                  this.props.submitWorkout(e, workoutFields);
                              }}/></td>
                          </tr>
                      </tbody>
                  </table>
              </form>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
    return { workoutFields: state.workoutFields };
};
const mapDispatchToProps = { ...foo };
export default connect(mapStateToProps, mapDispatchToProps)(SubmitExerciseComponent);