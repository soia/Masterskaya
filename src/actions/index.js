const studiosLoaded = (newStudios) => {
    return {
        type: 'FETCH_STUDIOS_SUCCESS',
        payload: newStudios
    };
};

const studiosRequested = () => {
    return {
        type: 'FETCH_STUDIOS_REQUEST'
    };
};

const studiosError = ( error ) => {
    return {
        type: 'FETCH_STUDIOS_FAILURE',
        payload: error
    };
};

const fetchStudios = ( storeService, dispatch ) => () => { 
    dispatch(studiosRequested());
    storeService.getStudios()
        .then(data => dispatch(studiosLoaded(data)))
        .catch((err) => dispatch(studiosError(err)));
}

const fetchTraining = ( storeService, dispatch ) => () => { 
    dispatch(studiosRequested());
    storeService.getTraining()
        .then(data => dispatch(studiosLoaded(data)))
        .catch((err) => dispatch(studiosError(err)));
}

export {
    fetchStudios,
    fetchTraining
};
