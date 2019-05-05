import updateStudioAndTrainingList from './studios-and-trainings';

const reducer = (state, action) => {
    return {
        studioAndTrainingList: updateStudioAndTrainingList(state, action)
    }
};

export default reducer;