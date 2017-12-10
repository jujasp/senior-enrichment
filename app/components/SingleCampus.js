import React, { Component } from 'react';
import EditCampus from './EditCampus'
import store, {fetchCampus} from '../store'

export default class SingleCampus extends Component {
    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(()=> {
            this.setState(store.getState());
        })
        const campusId = this.props.match.params.campusId;
        const campusThunk = fetchCampus(campusId)
        store.dispatch(campusThunk)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }


    render() {
       const {campus, students} = this.state
        return (
            <div className='container'>
                    <h2>{campus.name}</h2>
                    <p>{campus.description}</p>
                    <img src={campus.imageUrl} />
                    <br />
                    <br />
                    <h6>Students</h6>
                    {students.filter(student => {return student.campusId === campus.id})
                            .map(student => { 
                            return <p key={student.id}> {student.name} </p>})}
                    <br />
                    <br />
                    <EditCampus campus={campus} />
            </div>
        )
    }
}