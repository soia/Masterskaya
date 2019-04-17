const initialState = {
    instruments: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INSTRUMENTS_LOADED':
            return {
                instruments: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
