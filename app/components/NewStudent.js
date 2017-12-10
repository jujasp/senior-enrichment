import React, {Component} from 'react';
import {postStudent} from '../store'

export default class NewStudent extends Component {

    const { newStudentEntry, handleSubmit, handleChange } = props;

        return (
            <div className='container'>
                <form onSubmit = {handleSubmit}>
                    <legend> New Student </legend>
                        <label> First Name </label><br />
                        <input 
                        type='text' 
                        onChange={handleChange}
                        value={newStudentEntry.firstName}
                        name="firstName"
                        />
                        <br />
                        <label> Last Name </label><br />
                        <input 
                        type='text' 
                        onChange={handleChange} 
                        value={newStudentEntry.lastName}
                        name="lastName"
                        />
                        <br />
                        <label> E-mail</label><br />
                        <input 
                        type='text'
                        onChange={handleChange} 
                        value={newStudentEntry.email}
                        name="email"
                        />
                        <br />
                        <label> GPA </label><br />
                        <input 
                        type='text'
                        onChange={handleChange} 
                        value={newStudentEntry.gpa} 
                        name="gpa"
                        />
                        <br />
                        <label> Campus </label><br />
                        <select name='campusId'>
                            <option value='1'>Value 1</option> 
                            <option value='2'>Value 2</option>
                            <option value='3'>Value 3</option>
                        </select>
                        <br /><br />
                        <button type="submit"> Add Student </button>
                </form>
            </div>
        )
    }

