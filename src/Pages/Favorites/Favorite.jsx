import propTypes from "prop-types";

import { useSelector } from "react-redux";
import { FavoriteList } from "../../component/Favorites/FavoriteList";
import { Wrap } from "./Favorite.styled";
import { selectFavorite } from "../../Redux/Catalog/selectors";
import { NoFavorites } from "../../component/Favorites/NoFavorites";

export default function Favorites({ setNamePopUp }) {
  const favorites = useSelector(selectFavorite);

  return (
    <Wrap>
      {favorites.length > 0 ? (
        <FavoriteList setNamePopUp={setNamePopUp} />
      ) : (
        <NoFavorites />
      )}
    </Wrap>
  );
}

Favorites.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
