import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from '../types'

const initialState = {
    response: null,
    status: null,
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUEST:
            return { ...state, status: 'loading' }
        case DATA_SUCCESS:
            return { ...state, status: 'success', response: action.payload }
        case DATA_FAILURE:
            return { ...state, status: 'error' }
        default:
            return state
    }
}
