import { getDetailProduct } from '../api/getProduct';

export function startFetchData() {
    return { type: 'FETCH_START' };
}

export function fetchSuccess(data) {
    return { type: 'FETCH_SUCCESS', data };
}

export function fetchError() {
    return { type: 'FETCH_ERROR' };
}

export function fetchDataThunk(id) {
    return dispatch => {
        dispatch(startFetchData());
        getDetailProduct(id)
            .then(data => dispatch(fetchSuccess(data)))
            .catch(() => dispatch(fetchError()));
    };
}
