import React from 'react';
import { connect } from 'react-redux';

const EditStudent = (props) => {
    const student = props.student

        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <legend> Student </legend>
                        <label> First Name </label>
                        <input type='text' onChange={this.handleOnChange} value={student.firstName} />
                        <br />
                        <label> Last Name </label>
                        <input type='text' onChange={this.handleOnChange} value={student.lastName} />
                        <br />
                        <label> E-mail</label>
                        <input type='text' onChange={this.handleOnChange} value={student.email} />
                        <br />
                        <label> GPA </label>
                        <input type='text' placeholder='value between 0.0 - 4.0' onChange={this.handleOnChange} value={student.gpa} />
                        <br />
                        <label> Campus </label>
                        <select name="campuses">
                            <option value="value1">Value 1</option> 
                            <option value="value2">Value 2</option>
                            <option value="value3">Value 3</option>
                        </select>
                        <br />
                        <button type="submit"> Edit Student </button>
                </form>
            </div>
        )
}

const mapStateToProps = function(state){
    
}

const mapDispatchToProps = function(dispatch){

}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)