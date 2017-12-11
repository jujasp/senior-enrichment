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
  constructor(){
    super()
    this.state = store.getState()
  }

  componentDidMount () {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);

    this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
  }

  componentWillUnmount () {
		this.unsubscribe();
	}



  render () {
    return (
      <Router>
        <div>
          <div>
            <NavBar />
          </div>
          <Switch>
            <Route exact path='/' component={Campuses}/>
            <Route path='/campuses/:campusId' component={SingleCampus} />
            <Route path ='/students/:studentId' component={SingleStudent} />
            <Route path='/students/:studentId/edit' component={EditCampus} />
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/students' component={Students} />
            <Route path='/new-student' render={(routeProps)=><NewStudent {...routeProps} campuses={this.state.campuses}/>} />
            <Route path='/new-campus' component={NewCampus} />
          </Switch>
        </div>
      </Router> 
    );
  }
}