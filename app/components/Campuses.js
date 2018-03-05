import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { removeCampus } from '../store'

const mapState = state => ({
    campuses: state.campus,
    students: state.student
})

const Campuses = props => {
    const { campuses } = props || []
    //const campuses = []
    console.log(props)
    if (!props.campuses) {return <div />}
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
                            <tr key={campus.name}>
                                   <td> <img className="img-thumbnail" src={campus.imageUrl} /></td>
                                    <td> <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></td>
                                    <td> {campus.description}</td>
                                    <td><button
                                    onClick={(evt) =>{
                                        evt.preventDefault();
                                        store.dispatch(removeCampus(campus))
                                    }}
                                    className="btn-danger">X</button></td>
                                
                            </tr>
                        )
                    })
                }
                        </tbody>
                </table>
            </div>
    )
}

export default connect(mapState)(Campuses)