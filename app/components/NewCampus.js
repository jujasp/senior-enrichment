import React, {Component} from 'react';
import store, {postCampus} from '../store'

export default class NewCampus extends Component {
    constructor(){
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt, campusData, history){
        evt.preventDefault()
        store.dispatch(postCampus(campusData, history))
    }

    handleChange(evt) {
        evt.preventDefault()
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        const campus = this.state
        return (
            <div className='container'>
                <form onSubmit = {(e)=> {this.handleSubmit(e, campus, this.props.history)}} onChange={this.handleChange}>
                    <legend> New Campus </legend>
                        <label> Name </label><br />
                        <input
                        type="text"
                        value={campus.name}
                        name="name"
                        />
                        <br />
                        <label> Description</label><br />
                        <input
                        type= 'text'
                        value={campus.description}
                        name='description'
                        />
                        <br />
                        <label> Image </label><br />
                        <input
                        type='text'
                        value={campus.imageUrl}
                        name="imageUrl"
                        />
                        <br /><br />
                        <button type="submit"> Add Campus </button>
                </form>
            </div>
        )
    }
}
