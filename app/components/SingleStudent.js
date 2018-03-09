import React from 'react';
import { connect } from 'react-redux'
import EditStudent from './EditStudent'

const mapState = state => ({
    campuses: state.campus,
    students: state.student
})

const SingleStudent = props => {
        const {students, campuses} = props
        const student = students.filter(s => s.id === +props.match.params.studentId)[0]
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                     <td>{student.firstName}</td>
                     <td>{student.lastName}</td>
                     <td>{student.email}</td>
                     <td>{student.gpa}</td>
                     <td>{ !student.campusId ?
                        "Undefined" :
                         campuses.filter(campus => campus.id === student.campusId)
                        .map(campus => campus.name)[0]}</td>
                    </tr>
                </tbody>
                </table>
                    <EditStudent student={student} campuses={campuses} />
             </div>
        )
}

export default connect(mapState)(SingleStudent)
