import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import NewStudent from './NewStudent'
import EditCampus from './EditCampus'
import NewCampus from './NewCampus'
import Students from './Students'
import Campuses from './Campuses'
import store from '../store'
import { fetchStudents } from '../reducers/student'
import { fetchCampuses } from '../reducers/campus'

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(fetchStudents())
    dispatch(fetchCampuses())
  }
})

const mapState = state => ({
  students: state.student,
  campuses: state.campus
})

class Home extends Component {
  componentDidMount () {
    this.props.loadInitialData()
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
            <Route path='/new-student' render={(routeProps) => <NewStudent {...routeProps} campuses={this.props.campuses}/>} />
            <Route path='/new-campus' component={NewCampus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapState, mapDispatch)(Home)
