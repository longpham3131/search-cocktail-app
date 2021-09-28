import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCocktail } from "../../store/actions/cocktail.action";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const dispatch = useDispatch();
  const cocktailList = useSelector(
    (state) => state.cocktailReducer.cocktailList
  );
  useEffect(() => {
    dispatch(getCocktail());
  }, []);

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        paddingBottom: "50px",
      }}
      className="row"
    >
      {cocktailList ? (
        cocktailList.map((item, index) => {
          return (
            <div className="col-3 py-2">
              <Cocktail key={`cocktail_${index}`} cocktail={item} />
            </div>
          );
        })
      ) : (
        <h2 className="text-center">No result</h2>
      )}
    </div>
  );
};
export default CocktailList;
