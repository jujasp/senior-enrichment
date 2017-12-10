import React, { Component } from 'react';
import {connect} from 'react-redux'
import store, {fetchStudent, removeStudent, fetchCampuses} from '../store'

export default class SingleStudent extends Component {
    constructor() {
        super();
        this.state = store.getState();

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(evt) {
        evt.preventDefault()
        const {student} = this.state
        
        store.dispatch(removeStudent(student))
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
        const studentId = this.props.match.params.studentId
        const studentThunk = fetchStudent(studentId)
        store.dispatch(studentThunk)
    }


	componentWillUnmount () {
		this.unsubscribe();
	}


    render() {
        const {student, campuses} = this.state
         return (
             <div className="container">
                <table className="table">
                 <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>GPA</th>
                        <th>Campus</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                     <td>{this.state.student.firstName}</td>
                     <td>{student.lastName}</td>
                     <td>{student.email}</td>
                     <td>{student.gpa}</td>
                     <td>{campuses.filter(campus => campus.id === student.campusId)
                        .map(campus => campus.name)[0]}</td>
                     <button onClick={this.handleDelete}>x</button>
                    </tr>
                </tbody>
                </table>
             </div>
         )
     }
}

