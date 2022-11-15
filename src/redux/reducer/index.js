import {combineReducers} from 'redux';
import listrecipeReducer from './listProfile';
import recipeReducer from './recipe'

const rootReducer = combineReducers ({
    recipedetail:recipeReducer,
    listrecipe:listrecipeReducer
})
export default rootReducer;