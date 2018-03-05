import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeStudent } from '../store'

const mapState = state => ({
    students: state.student,
    campuses: state.campus
})

const mapDispatch = dispatch => ({
    deleteStudent(student) {
        dispatch(removeStudent(student))
    }
})

const Students = props => {
    const {students, campuses} = props
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
                        students.map(student => {
                            return (
                                <tr key={student.name}>
                                            <td><Link to={`/students/${student.id}`}>{student.name} </Link> </td>
                                            <td> {student.email} </td>
                                            <td> {student.gpa} </td>
                                            <td> {
                                                student.campusId !== null ?
                                                campuses.filter(campus => (campus.id === student.campusId))[0].name :
                                                'Undefined'
                                            }</td>
                                            <td>
                                                <button
                                                    onClick={() => props.deleteStudent(student)}
                                                    className="btn-danger">X
                                                </button>
                                            </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
    )
}

export default connect(mapState, mapDispatch)(Students)
