import React from 'react';
import store, {postCampus, writeNewCampus} from '../store'
import {connect} from 'react-redux'

function NewCampus (props) {
    const { newCampusEntry, handleSubmit, handleChange } = props

        return (
            <div className='container'>
                <form onSubmit = {handleSubmit}>
                    <legend> New Campus </legend>
                        <label> Name </label><br />
                        <input
                        type="text"
                        value={newCampusEntry.name}
                        name="name"
                        onChange={handleChange}
                        />
                        <br />
                        <label> Description</label><br />
                        <input
                        type= 'text'
                        value={newCampusEntry.description}
                        name='description'
                        onChange={handleChange} 
                        />
                        <br />
                        <label> Image </label><br />
                        <input
                        type='text'
                        value={newCampusEntry.imageUrl}
                        name="imageUrl"
                        onChange={handleChange} 
                        />
                        <br /><br />
                        <button type="submit"> Add Campus </button>
                </form>
            </div>
        )
}

const mapStateToProps = function(state) {
    return {
        newCampusEntry: state.newCampusEntry
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        handleChange(evt) {
            dispatch(writeNewCampus({[evt.target.name]: evt.target.value}))
        },

        handleSubmit(evt) {
            evt.preventDefault();
            dispatch(postCampus(campus, ownProps.history))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus)