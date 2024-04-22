import propTypes from "prop-types";

import { useSelector } from "react-redux";
import { selectFavorite } from "../../Redux/Catalog/selectors";
import { TeachersCard } from "../TeachersListCards/TeachersCard";
import { StyleList } from "./FavoriteList.styled";

export const FavoriteList = ({ setNamePopUp }) => {
  const favorites = useSelector(selectFavorite);

  return (
    <StyleList>
      {favorites.map((teacher) => {
        return (
          <TeachersCard
            key={teacher.id}
            {...teacher}
            setNamePopUp={setNamePopUp}
          />
        );
      })}
    </StyleList>
  );
};

FavoriteList.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
