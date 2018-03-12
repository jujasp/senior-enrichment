import React, {Component} from 'react'
import { connect } from 'react-redux'
import { putStudent } from '../reducers/student'


const mapState = state => ({
    students: state.student,
    campuses: state.campus
})

const mapDispatch = dispatch => ({
    handleSubmit(evt, id, newData) {
        evt.preventDefault()
        dispatch(putStudent(id, newData))
    }
})

class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleChange(evt) {
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value})
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

    render() {
        const { campuses } = this.props
        const newStudentData = this.state
        const id = this.props.student.id
            return (
                <div className="container">
                    <form onSubmit={(e) => this.props.handleSubmit(e, id, newStudentData)}>
                        <h5> Edit Student </h5>
                            <label> First Name </label><br />
                            <input
                            name="firstName"
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.firstName} />
                            <br />
                            <label> Last Name </label><br />
                            <input
                            name="lastName"
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.lastName} />
                            <br />
                            <label> E-mail</label><br />
                            <input
                            name="email"
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.email} />
                            <br />
                            <label> GPA </label><br />
                            <input
                            name="gpa"
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.gpa} />
                            <br />
                            <label> Campus </label><br />
                            <select
                            name="campusId"
                            onChange={this.handleSelectChange}
                            >{campuses.map(campus => {
                                return (
                                <option
                                key={campus.id}
                                data-id={campus.id}
                                value={this.state.campusId}
                                >{campus.name}</option>
                            )})}
                            </select>
                            <br /><br />
                            <button
                            type="submit"> Edit Student </button>
                    </form>
                </div>
        )
    }
}

export default connect(mapState, mapDispatch)(EditStudent)
