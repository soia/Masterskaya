import updatepagesList from './studios-and-trainings.reducer';
import alert from './alert.reducer';
import authentication from './authentication.reducer';
import registration from './registration.reducer';
import users from './users.reducer';

const rootReducer = (state, action) => {
    return {
        pagesList: updatepagesList(state, action),
        alert: alert(state, action),
        authentication: authentication(state, action),
        registration: registration(state, action),
        users: users(state, action)
    }
};

export default rootReducer;