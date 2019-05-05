const updateStudioAndTrainingList = (state, action) => {

    if (state === undefined) {
        return {
            studios: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_STUDIOS_REQUEST':
            return {
                studios: [],
                loading: true,
                error: null
            };

        case 'FETCH_STUDIOS_SUCCESS':
            return {
                studios: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_STUDIOS_FAILURE':
            return {
                studios: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.studioAndTrainingList;
    }
}

export default updateStudioAndTrainingList;