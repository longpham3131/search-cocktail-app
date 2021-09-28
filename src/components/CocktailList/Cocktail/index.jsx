import { Card } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const { Meta } = Card;

const Cocktail = ({ cocktail }) => {
  const language = useSelector((state) => state.cocktailReducer.language);

  const onShowLanguage = (language) => {
    let value = "";
    switch (language) {
      case "ES":
        value = cocktail.strInstructionsES;
        break;
      case "DE":
        value = cocktail.strInstructionsDE;
        break;
      case "IT":
        value = cocktail.strInstructionsIT;
        break;
      default:
        value = cocktail.strInstructions;
        break;
    }
    if (!value) {
      return "No description for this language.";
    }
    return value;
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={cocktail.strDrinkThumb} />}
      >
        <Meta
          title={cocktail.strDrink}
          description={onShowLanguage(language)}
        />
      </Card>
    </>
  );
};

export default Cocktail;
