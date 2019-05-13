import { combineReducers } from 'redux';

import { updatepagesList } from './studios-and-trainings.reducer';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    updatepagesList
  });
  
  export default rootReducer;