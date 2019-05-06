import updatepagesList from './studios-and-trainings';

const reducer = (state, action) => {
    return {
        pagesList: updatepagesList(state, action)
    }
};

export default reducer;