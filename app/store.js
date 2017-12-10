import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';


//initial state
const initialState = {
    students: [],
    campuses: [],
    student: {},
    campus: {},
    newCampusEntry: {},
    newStudentEntry: {}
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

//action types
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_STUDENT = 'GET_STUDENT'

const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS'
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'

const WRITE_NEW_STUDENT = 'WRITE_NEW_STUDENT'
const WRITE_NEW_CAMPUS = 'WRITE_NEW_CAMPUS'

const UPDATE_STUDENT = 'UPDATE_STUDENT'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

const DELETE_STUDENT = 'DELETE_STUDENT'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

//action creators
export function getStudents (students) {
    return {
        type: GET_STUDENTS,
        students
    }
}

export function getCampuses (campuses) {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export function writeNewStudent(student) {
    return {
        type: WRITE_NEW_STUDENT,
        student
    }
}

export function writeNewCampus(campus) {
    return {
        type: WRITE_NEW_CAMPUS,
        campus
    }
}

export function getStudent(student) {
    return {
        type: GET_STUDENT,
        student
    }
}

export function getSingleCampus(campus) {
    return {
        type: GET_SINGLE_CAMPUS,
        campus
    }
}

export function getCampus(campus) {
    return {
        type: GET_CAMPUS,
        campus
    }
}

export function newStudent (student) {
    return {
        type: ADD_NEW_STUDENT,
        student
    }
}

export function newCampus (newCampus) {
    return {
        type: ADD_NEW_CAMPUS,
        newCampus
    }

}

export function updateStudent(student) {
    return {
        type: UPDATE_STUDENT,
        student
    }
}

export function updateCampus(campus) {
    return {
        type: UPDATE_CAMPUS,
        campus
    }

}

export function deleteStudent(student) {
    return {
        type: DELETE_STUDENT,
        student
    }

}

export function deleteCampus(campus) {
    return {
        type: DELETE_CAMPUS,
        campus
    }
}

export function fetchStudents(){
    return function thunk (dispatch, getState) {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students)
                dispatch(action)
            });
    }
}

export function fetchCampuses() {
    return function thunk(dispatch, getState) {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {
                const action = getCampuses(campuses)
                dispatch(action)
            });
    }
}

export function fetchCampus(id) {
    return function thunk(dispatch) {
        axios.get(`/api/campuses/${id}`)
        .then(res => res.data)
        .then(campus => {
            const action = getSingleCampus(campus)
            dispatch(action)
        })
    }
}

export function fetchStudent(id){
    return function thunk(dispatch) {
        axios.get(`/api/students/${id}`)
        .then(res => res.data)
        .then(student => {
            const action = getStudent(student)
            dispatch(action)
        })
    }
}

export function postCampus(campusData, history) {
    return function thunk(dispatch) {
        axios.post('/api/campuses', campusData)
            .then(res=> res.data)
            .then(newCampus => {
                dispatch(getCampus(newCampus))
            })
    }
}

export function postStudent(studentData) {
    return function thunk(dispatch) {
        axios.post('/api/students', studentData)
            .then(res=>res.data)
            .then(student => {
                const action = newStudent(student)
                dispatch(action)
            })
    }
}

export function removeStudent(student, history) {
    return function thunk(dispatch) {
        axios.delete(`/api/students/${student.id}`)
            .then(() => {
                console.log('Deleted Student: ', student.id)
                dispatch(deleteStudent(student))
            })
            .catch(error => {
                throw(error)
            })
        }
}

export function removeCampus(campus) {
    return function thunk(dispatch) {
        axios.delete(`/api/campuses/${campus.id}`)
            .then(() => {
                console.log('Deleted Student: ', campus.id)
                dispatch(deleteCampus(campus))
            })
            .catch(error => {
                throw(error)
            })
        }
}


function handleSubmit(evt) {
    evt.preventDefault();
    const content = this.state.newStudent;
    const campusId = this.props.campusId;
    const postStudentThunk = postStudent(studentData)
}

function reducer (state = initialState, action ){
    console.log(state)
    switch (action.type) {
        case GET_STUDENTS:
            return Object.assign({}, state, {students: action.students})
        case GET_CAMPUSES:
            return Object.assign({}, state, {campuses: action.campuses})
        case WRITE_NEW_STUDENT:
            return Object.assign({}, state, {newStudentEntry: action.student})
        case WRITE_NEW_CAMPUS:
            return Object.assign({}, state, {newCampusEntry: action.campus})
        case ADD_NEW_CAMPUS:
            return Object.assign({}, state, {campuses: [...state.campuses, action.campus]})
        case GET_SINGLE_CAMPUS:
            return Object.assign({}, state, {campus: action.campus})
        case GET_CAMPUS:
            return Object.assign({}, state, {campuses: [...state.campuses, action.campus]})
        case GET_STUDENT:
            return Object.assign({}, state, {student: action.student})
         case UPDATE_STUDENT:
             return Object.assign({}, state, {students: state.students.map(student=>{
                 if(student !== action.student) return student;
                 return Object.assign({}, student, {student: action.student})
             })})
         case UPDATE_CAMPUS:
             return Object.assign({}, state, {students: state.campuses.map(campus=>{
                if(campus !== action.campus) return campus;
                return Object.assign({}, campus, {student: action.campus})
            })})
        case DELETE_STUDENT:
            return Object.assign({}, state, {students: state.students.filter(student => student !== action.student)})
         case DELETE_CAMPUS:
             return Object.assign({}, state, {campuses: state.campuses.filter(campuses => campus !== action.campus)})
        default:
            return state;
    }
}

