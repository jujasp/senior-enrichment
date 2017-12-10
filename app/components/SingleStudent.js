import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import store, {fetchStudent, removeStudent} from '../store'

class SingleStudent extends Component {
    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(evt) {
        evt.preventDefault()
        const {student, history} = this.props
        store.dispatch(removeStudent(student, history))
    }

    componentDidMount() {
        const studentId = this.props.match.params.studentId
        const studentThunk = fetchStudent(studentId)
        store.dispatch(studentThunk)
    }


    render() {
        const {student} = this.props
         return (
             <div>
                 <div>
                     <h1>{student.name}</h1>
                     <h2>{student.email}</h2>
                     <h3>{student.campusId}</h3>
                     <h3>{student.gpa} </h3>
                     <button onClick={this.handleDelete}>delete student</button>
                 </div>
             </div>
         )
     }
}

const mapStateToProps = function(state, ownProps){
    return {
        student: state.student
    }
}

export default connect(mapStateToProps)(SingleStudent)

