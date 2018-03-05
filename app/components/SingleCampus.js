import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditCampus from './EditCampus'
import store, {fetchCampus} from '../store'
import { Link } from 'react-router-dom'

const mapState = state => ({
    campuses: state.campus,
    students: state.student
})

class SingleCampus extends Component {
    render() {
       const {campuses, students} = this.props
       const campus = campuses.filter(campus => campus.id === +this.props.match.params.campusId)[0]
        return (
            <div className="container">
                    <h2>{campus.name}</h2>
                    <p>{campus.description}</p>
                    <img src={campus.imageUrl} />
                    <br />
                    <h4>Students</h4>
                    {students.filter(student => student.campusId === campus.id)
                            .map(student => {
                            return <p key={student.id}><Link to={`/students/${student.id}`}> {student.name}</Link></p>})}
                    <br />
                    <br />
                    <EditCampus campus={campus} />
            </div>
        )
    }
}

export default connect(mapState)(SingleCampus)
