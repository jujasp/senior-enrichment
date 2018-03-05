import axios from 'axios'

//action types
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const WRITE_NEW_STUDENT = 'WRITE_NEW_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

//action creators
export const getStudents = students => ({
    type: GET_STUDENTS,
    students
})

export const writeNewStudent = student => ({
    type: WRITE_NEW_STUDENT,
    student
})

export const getStudent = student => ({
    type: GET_STUDENT,
    student
})

export const updateStudent = student => ({
    type: UPDATE_STUDENT,
    student
})

export const deleteStudent = student => ({
    type: DELETE_STUDENT,
    student
})

export function fetchStudents(){
    return function thunk (dispatch) {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students)
                dispatch(action)
            });
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

export function postStudent(studentData, history) {
    return function thunk(dispatch) {
        axios.post('/api/students', studentData)
            .then(res=>res.data)
            .then(student => {
                dispatch(getStudent(student))
                history.push(`/students/${student.id}`)
            })
    }
}

export function putStudent(id, studentData){
    return function thunk(dispatch) {
        axios.put(`/api/students/${id}`, studentData)
            .then(res => res.data)
            .then(student => {
                const action = updateStudent(student)
                dispatch(action)
            })
    }
}

export function removeStudent(student) {
    return function thunk(dispatch) {
        axios.delete(`/api/students/${student.id}`)
            .then(() => {
                dispatch(deleteStudent(student))
            })
            .catch(error => {
                throw(error)
            })
        }
}

export default function(students = [], action) {
    switch (action.type) {
        case GET_STUDENT:
            return [...students, action.student]
        case GET_STUDENTS:
            return [...action.students]
        case UPDATE_STUDENT:
            return [...students, action.student]
        case DELETE_STUDENT:
            return students.filter(student => student !== action.student)
        default:
            return students
    }
}
