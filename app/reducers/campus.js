import axios from 'axios'

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const WRITE_NEW_CAMPUS = 'WRITE_NEW_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

//ACTION CREATORS
export const getCampuses = campuses => ({
    type: GET_CAMPUSES,
    campuses
})

export const getCampus = campus => ({
    type: GET_CAMPUS,
    campus
})

export const writeNewCampus = campus => ({
    type: WRITE_NEW_CAMPUS,
    campus
})

export const updateCampus = campus => ({
    type: UPDATE_CAMPUS,
    campus
})

export const deleteCampus = campus => ({
    type: DELETE_CAMPUS,
    campus
})


export function fetchCampuses() {
    return function thunk(dispatch) {
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
            const action = getCampus(campus)
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
                history.push(`/campuses/${newCampus.id}`)
            })
    }
}

export function putCampus(id, campusData){
    return function thunk(dispatch) {
        axios.put(`/api/campuses/${id}`, campusData)
            .then(res=>res.data)
            .then(campus=> {
                const action = updateCampus(campus)
                dispatch(action)
            })
    }
}

export function removeCampus(campus) {
    return function thunk(dispatch) {
        axios.delete(`/api/campuses/${campus.id}`)
            .then(() => {
                dispatch(deleteCampus(campus))
            })
            .catch(error => {
                throw(error)
            })
        }
}

//ACTION REDUCERS
export default function(campuses = [], action) {
    switch (action.type) {
        case GET_CAMPUS:
            return [...campuses, action.campus]
        case GET_CAMPUSES:
            return [...action.campuses]
        case UPDATE_CAMPUS:
            return [...campuses, action.campus]
        case DELETE_CAMPUS:
            return campuses.filter(campus => campus !== action.campus)
        default:
            return campuses
    }
}
