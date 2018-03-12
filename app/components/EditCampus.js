import React, { Component } from 'react'
import { connect } from 'react-redux'
import { putCampus } from '../reducers/campus'

const mapDispatch = dispatch => ({
    handleSubmit(e, id, newData) {
        e.preventDefault()
        console.log(newData)
        dispatch(putCampus(id, newData))
    }
})

class EditCampus extends Component {
    constructor(props) {
    super(props)
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        const id = this.props.campus.id
        return (
            <div className="container">
                <form onSubmit={e => this.props.handleSubmit(e, id, this.state)}>
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

export default connect(null, mapDispatch)(EditCampus)

