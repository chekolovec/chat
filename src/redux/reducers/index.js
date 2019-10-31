import { combineReducers } from 'redux';

import messages from './messages';
import users from './users';
import name from './name';

const chat = combineReducers({
    messages,
    users,
    name
})

export default chat;