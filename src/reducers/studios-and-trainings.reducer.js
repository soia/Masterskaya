import { contentConstants } from '../constants';


export function updatepagesList(state, action) {

    if (state === undefined) {
        return {
            dataItem: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case contentConstants.REQUEST:
            return {
                dataItem: [],
                loading: true,
                error: null
            };

        case contentConstants.SUCCESS:
            return {
                dataItem: action.payload,
                loading: false,
                error: null
            };

        case contentConstants.FAILURE:
            return {
                dataItem: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}