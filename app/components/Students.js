import React from 'react'
import { Link } from 'react-router-dom'
import store, {removeStudent} from '../store'
import { connect } from 'react-redux'

const Students = (props) => {
    const {students, campuses, handleDelete } = props

        return (
            <div className="container">
                <h2> Students </h2>
                <table className="table">
                <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>GPA</th>
                            <th>Campus</th>
                            <th>Delete</th>
                        </tr>
                </thead>
                <tbody>
                {
                    students.map(student =>
                        { return (
                        <tr key={student.id}>
                                    <td><Link to={`/students/${student.id}`}>{student.name} </Link> </td>
                                    <td> {student.email} </td>
                                    <td> {student.gpa} </td>
                                    <td> {campuses.filter(campus => campus.id === student.campusId)[0].name}</td>
                                    <td> <button
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        store.dispatch(removeStudent(student))
                                    }} className="btn-danger">X</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
                </table>
            </div>
    )
}

const mapStateToProps = function(state) {
    return {
        students: state.students,
        campuses: state.campuses
    }
}

export default connect(mapStateToProps)(Students);