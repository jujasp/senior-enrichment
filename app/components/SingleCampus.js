import React, { Component } from 'react';
import Students from './Students'
import EditCampus from './EditCampus'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import store, {fetchCampus} from '../store'

class SingleCampus extends Component {
    constructor() {
        super();
    }

    componentDidMount () {
        const campusId = this.props.match.params.campusId;
        const campusThunk = fetchCampus(campusId)
        store.dispatch(campusThunk)
    }


    render() {
       const {campus, editCampus} = this.props
        return (
            <div>
                <div>
                    <h1>{campus.name}</h1>
                    <h2>{campus.description}</h2>
                    
                    <img src={campus.imageUrl} />
                    <Route
                    path={`/campuses/${campus.id}`}
                    render={()=> (<Students students={campus.students}/>)} />
                    <br />
                    <br />
                    <br />
                    <Route path={`/campuses/${campus.id}`} render={()=>(<EditCampus />)}/>
                    <button> Delete Campus </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps){
    return {
        campus: state.campus
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {

}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

