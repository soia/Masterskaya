
const instrumentsLoaded = (newInstruments) => {
    return {
        type: 'INSTRUMENTS_LOADED',
        payload: newInstruments
    };
};

export {
    instrumentsLoaded
};
