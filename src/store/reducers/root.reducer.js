import { combineReducers } from "redux";
import { cocktailReducer } from "./cocktail.reducer";

const rootReducer = combineReducers({
  cocktailReducer,
});

export default rootReducer;
