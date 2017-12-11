import React, {Component} from 'react';
import store, {putCampus} from '../store'

export default class EditCampus extends Component {
    constructor(props) {
    super(props)
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit(evt, campusId) {
        evt.preventDefault();
        store.dispatch(putCampus(campusId, this.state))
    }

    render() {
        const {campus, students} = this.props
        const id = this.props.campus.id
        return (
            <div className="container">
                <form onSubmit={(e)=>this.handleSubmit(e, id)}>
                    <h5> Edit Campus </h5>
                        <label> Name </label><br />
                        <input 
                        onChange={this.handleChange}
                        name="name" 
                        type="text" 
                        value={this.state.name} />
                        <br />
                        <label> Description</label><br />
                        <input 
                        onChange={this.handleChange} 
                        name="description"
                        type="text" 
                        value={this.state.description} />
                        <br />
                        <label> ImageUrl </label><br />
                        <input 
                        onChange={this.handleChange} 
                        type="text" 
                        value={this.state.imageUrl} />
                        <br /><br />
                        <button 
                        type="submit"> Edit campus </button>
                </form>
            </div>
        )
    }
}

