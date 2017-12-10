import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Students = (props) => {
    const {students} = props

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
                                <Link to={`/students/${student.id}`}>
                                    <td> {student.email} </td>
                                    <td> {student.name} </td>
                                    <td> {student.gpa} </td>
                                </Link>
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
        students: state.students
    }
}

export default connect(mapStateToProps)(Students);