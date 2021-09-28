import {
  CHANGE_LANGUAGE,
  GET_COCKTAIL_BY_NAME,
} from "../constants/cocktail.constant";

const initialState = {
  cocktailList: [],
  language: "",
};

export const cocktailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COCKTAIL_BY_NAME:
      return { ...state, cocktailList: payload };
    case CHANGE_LANGUAGE:
      return { ...state, language: payload };
    default:
      return state;
  }
};
