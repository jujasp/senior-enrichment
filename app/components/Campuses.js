import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Campuses = (props) => {
    const {campuses, students}  = props

    return (
        <div className="container">
                <h2> Campuses </h2>
                <table className="table">
                <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Students</th>
                            <th>Delete</th>
                        </tr>
                </thead>
                <tbody>
                {
                    campuses.map(campus =>
                        { return (
                            <tr key={campus.id}>
                                   <td> <img className="img-thumbnail" src={campus.imageUrl} /></td>
                                    <td> {campus.name} </td>
                                    <td> <Link to={`/campuses/${campus.id}`}>{campus.description} </Link></td>
                                    <td><button className="btn-danger">X</button></td>
                                
                            </tr>
                        )
                    })
                }
                        </tbody>
                </table>
            </div>
    )
}

//mapStateToProps
const mapStateToProps = function(state) {
    return {
        campuses: state.campuses,
        students: state.students
    }
}

export default connect(mapStateToProps)(Campuses);