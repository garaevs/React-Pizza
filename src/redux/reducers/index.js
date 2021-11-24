import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
	filter: filtersReducer,
	pizzas: pizzasReducer,
});

export default rootReducer;
