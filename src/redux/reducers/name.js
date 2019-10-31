import * as types from '../../constants/ActionTypes';

const name = (state = [], action) => {
	switch (action.type) {
		case types.SET_NAME:
			return {
             ...state,
             name: action.name   
            }
		default:
			return state
	}
}

export default name