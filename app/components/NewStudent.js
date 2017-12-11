import React, {Component} from 'react';
import store, {postStudent} from '../store'

export default class NewStudent extends Component {
    constructor() {
    super()
    this.state= {}
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    
}

    handleSubmit(evt, studentData, history) {
        evt.preventDefault()
        store.dispatch(postStudent(studentData, history))
    }

    handleChange(evt) {
        evt.preventDefault()
        this.setState({[evt.target.name]:evt.target.value})
    }

    handleSelectChange(evt){
        evt.preventDefault();
        const index = evt.target.selectedIndex;
        const optionElement = evt.target.childNodes[index]
        const option =  optionElement.getAttribute('data-id');
        this.setState({
          campusId: +option
        });
    }

    render(){
        console.log(this.props)
        const student = this.state
        const {campuses} = this.props
        return (
            <div className='container'>
                <form onSubmit = {(e)=>{
                    e.preventDefault()
                    this.handleSubmit(e, student, this.props.history)}}>
                    <legend> New Student </legend>
                        <label> First Name </label><br />
                        <input 
                        type='text' 
                        onChange={this.handleChange}
                        value={student.firstName}
                        name="firstName"
                        />
                        <br />
                        <label> Last Name </label><br />
                        <input 
                        type='text' 
                        onChange={this.handleChange} 
                        value={student.lastName}
                        name="lastName"
                        />
                        <br />
                        <label> E-mail</label><br />
                        <input 
                        type='text'
                        onChange={this.handleChange} 
                        value={student.email}
                        name="email"
                        />
                        <br />
                        <label> GPA </label><br />
                        <input 
                        type='text'
                        onChange={this.handleChange} 
                        value={student.gpa} 
                        name="gpa"
                        />
                        <br />
                        <label> Campus </label><br />
                        <select
                        name='campusId'
                        onChange={this.handleSelectChange}>
                        {campuses.map(campus=>{
                        return <option 
                        key={campus.id}
                        data-id={campus.id}
                        value={student.campusId}
                        >{campus.name} 
                        </option>})}
                        
                        </select>
                        <br /><br />
                        <button type="submit"> Add Student </button>
                </form>
            </div>
        )
    }
}
