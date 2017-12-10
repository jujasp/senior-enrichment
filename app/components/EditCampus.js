import React from 'react';
import {connect} from 'react-redux'

const EditCampus = (props) => {
    const campus = props.campus

        return (
            <div>
                <form>
                    <legend> Campus </legend>
                        <label> Name </label>
                        <input type='text' value={campus.name} />
                        <br />
                        <label> Description</label>
                        <input type='text' value={campus.description} />
                        <br />
                        <label> ImageUrl </label>
                        <input type='text' value={campus.imageUrl} />
                        <br />
                        <button type="submit"> Edit campus </button>
                </form>
            </div>
        )
}


//mapStateToProps
const mapStateToProps = function(state) {
    return {
        campus: state.campus,
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        handleSubmit(evt){
            evt.preventDefault();
            dispatch(updateCampus(campus, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)