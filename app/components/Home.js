import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import NewStudent from './NewStudent'
import EditCampus from './EditCampus'
import NewCampus from './NewCampus'
import Students from './Students'
import Campuses from './Campuses'
import store, {fetchStudents, fetchCampuses } from '../store'

export default class Home extends Component {

  componentDidMount () {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }



  render () {
    return (
      <Router>
        <div>
          <div>
            <NavBar />
          </div>
          <Switch>
            <Route path='/campuses/:campusId' component={SingleCampus} />
            <Route path ='/students/:studentId' component={SingleStudent} />
            <Route path='/students/:studentId/edit' component={EditCampus} />
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/students' component={Students} />
            <Route path='/new-student' component={NewStudent} />
            <Route path='/new-campus' component={NewCampus} />
          </Switch>
        </div>
      </Router> 
    );
  }
}