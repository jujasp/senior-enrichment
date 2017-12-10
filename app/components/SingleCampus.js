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
       const {campus, editCampus, students} = this.props
        return (
            <div className='container'>
                    <h1>{campus.name}</h1>
                    <h4>{campus.description}</h4>
                    <img src={campus.imageUrl} />
                    <br />
                    <br />
                    <h4>Students</h4>
                    {students.filter(student => {return student.campusId === campus.id})
                            .map(student => { 
                            return <p key={student.id}> {student.name} </p>})}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <EditCampus campus={campus} />
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps){
    return {
        campus: state.campus,
        students: state.students
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

