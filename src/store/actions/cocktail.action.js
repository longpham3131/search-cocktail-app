import axios from "axios";
import {
  CHANGE_LANGUAGE,
  GET_COCKTAIL_BY_NAME,
} from "../constants/cocktail.constant";
// GET COCKTAIL LIST
export const getCocktail = (keyword = "") => {
  return async (dispatch) => {
    try {
      const res =
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}
        `);

      await dispatch(getCocktailAction(res.data.drinks));
    } catch (err) {
      dispatch(getCocktailAction(err.response));
    }
  };
};

const getCocktailAction = (res) => {
  return { type: GET_COCKTAIL_BY_NAME, payload: res };
};

// CHANGE LANGUAGE
export const changeLanguage = (language) => {
  return { type: CHANGE_LANGUAGE, payload: language };
};
