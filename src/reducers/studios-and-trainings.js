const updateStudioAndTrainingList = (state, action) => {

    if (state === undefined) {
        return {
            dataItem: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_CONTENT_REQUEST':
            return {
                dataItem: [],
                loading: true,
                error: null
            };

        case 'FETCH_CONTENT_SUCCESS':
            return {
                dataItem: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_CONTENT_FAILURE':
            return {
                dataItem: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.studioAndTrainingList;
    }
}

export default updateStudioAndTrainingList;