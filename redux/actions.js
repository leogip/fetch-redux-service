import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from './types'
import ApiService from '../services/apiService'

const apiService = new ApiService()

export function dataRequest() {
    return {
        type: DATA_REQUEST,
    }
}

export function dataSuccess(data) {
    return {
        type: DATA_SUCCESS,
        payload: data,
    }
}

export function dataFailure() {
    return {
        type: DATA_FAILURE,
    }
}

export function fetchData(url, method = 'GET', data) {
    return async (dispatch) => {
        try {
            dispatch(dataRequest())
            const response = await apiService.fetchResource(url, method, data)
            const payload = await response.json()
            dispatch(dataSuccess(payload))
        } catch {
            dispatch(dataFailure())
        }
    }
}
