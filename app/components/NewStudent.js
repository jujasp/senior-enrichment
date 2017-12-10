import React from 'react';
import {postStudent, writeNewStudent} from '../store'
import {connect} from 'react-redux'

function NewStudent (props) {

    const { newStudentEntry, handleSubmit, handleChange } = props;

        return (
            <div>
                <form onSubmit = {handleSubmit}>
                    <legend> New Student </legend>
                        <label> First Name </label>
                        <input 
                        type='text' 
                        onChange={handleChange}
                        value={newStudentEntry.firstName}
                        name="firstName"
                        />
                        <br />
                        <label> Last Name </label>
                        <input 
                        type='text' 
                        onChange={handleChange} 
                        value={newStudentEntry.lastName}
                        name="lastName"
                        />
                        <br />
                        <label> E-mail</label>
                        <input 
                        type='text'
                        onChange={handleChange} 
                        value={newStudentEntry.email}
                        name="email"
                        />
                        <br />
                        <label> GPA </label>
                        <input 
                        type='text'
                        onChange={handleChange} 
                        value={newStudentEntry.gpa} 
                        name="gpa"
                        />
                        <br />
                        <label> Campus </label>
                        <select name='campusId'>
                            <option value='1'>Value 1</option> 
                            <option value='2'>Value 2</option>
                            <option value='3'>Value 3</option>
                        </select>
                        <br />
                        <button type="submit"> Add Student </button>
                </form>
            </div>
        )
    }


const mapStateToProps = function(state) {
    return {
        newStudentEntry: state.newStudentEntry
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    const student = {};
    return {
        handleChange(evt) {
            //key value on to the student object; 
            student[evt.target.name]=evt.target.value;

            dispatch(writeNewStudent(student))
        },

        handleSubmit (evt) {
            evt.preventDefault();
            dispatch(postStudent(student, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent)

