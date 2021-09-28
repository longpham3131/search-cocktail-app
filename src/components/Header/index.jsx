import { debounce } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  changeLanguage,
  getCocktail,
} from "../../store/actions/cocktail.action";
// ANTD
import { Select } from "antd";

const { Option } = Select;

const Header = () => {
  const dispatch = useDispatch();
  const debounceSearch = useCallback(
    debounce((keyword) => dispatch(getCocktail(keyword)), 1000),
    []
  );

  function handleChange(value) {
    dispatch(changeLanguage(value));
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ width: "90%", margin: "0 auto" }}
    >
      <div className="container-fluid align-items-center">
        <p
          className="fs-2 fw-bold m-0"
          style={{ color: "rgb(255 81 81 / 90%)" }}
        >
          The Cocktails
        </p>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              onChange={(e) => {
                debounceSearch(e.target.value);
              }}
              placeholder="Search cocktail"
            />
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="">England</Option>
              <Option value="ES">SPAIN</Option>
              <Option value="DE">GERMANY</Option>
              <Option value="IT">ITALY</Option>
            </Select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
