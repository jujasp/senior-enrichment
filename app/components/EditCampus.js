import React, {Component} from 'react';
import {connect} from 'react-redux'

export class EditCampus extends Component {
    constructor() {
    super()

    }

    render() {
        const campus = this.props.campus
        return (
            <div className="container">
                <form>
                    <legend> Edit Campus </legend>
                        <label> Name </label><br />
                        <input onChange={handleChange} type="text" value={campus.name} />
                        <br />
                        <label> Description</label><br />
                        <input onChange={handleChange} type="text" value={campus.description} />
                        <br />
                        <label> ImageUrl </label><br />
                        <input onChange={handleChange} type="text" value={campus.imageUrl} />
                        <br /><br />
                        <button type="submit"> Edit campus </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        handleSubmit(evt){
            evt.preventDefault();
            dispatch(updateCampus(campus, ownProps.history))
        },
        handleOnChange(evt){

        }
    }
}

export default connect(null, mapDispatchToProps)(EditCampus)
