import { contentConstants } from '../constants';



const contentLoaded = (newStudios) => {
    return {
        type: contentConstants.SUCCESS,
        payload: newStudios
    };
};

const contentRequested = () => {
    return {
        type: contentConstants.REQUEST
    };
};

const contentError = ( error ) => {
    return {
        type: contentConstants.FAILURE,
        payload: error
    };
};

const fetchStudios = ( storeService, dispatch ) => () => { 
    dispatch(contentRequested());
    storeService.getStudios()
        .then(data => dispatch(contentLoaded(data)))
        .catch((err) => dispatch(contentError(err)));
}

const fetchTraining = ( storeService, dispatch ) => () => { 
    dispatch(contentRequested());
    storeService.getTraining()
        .then(data => dispatch(contentLoaded(data)))
        .catch((err) => dispatch(contentError(err)));
}

const fetchSynthesizer = ( storeService, dispatch ) => () => { 
    dispatch(contentRequested());
    storeService.getSynthesizer()
        .then(data => dispatch(contentLoaded(data)))
        .catch((err) => dispatch(contentError(err)));
}

export {
    fetchStudios,
    fetchTraining,
    fetchSynthesizer
};
