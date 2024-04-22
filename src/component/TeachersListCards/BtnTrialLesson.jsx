import propTypes from "prop-types";

import { BtnTrialLessons } from "./BtnTrialLesson.styled";
import { setCard } from "../../Redux/Catalog/slice";
import { useDispatch } from "react-redux";

export const BtnTrialLesson = ({ setNamePopUp, ...props }) => {
  const { id, avatar_url, name, surname } = props;
  const dispatch = useDispatch();
  const handleBtnTrialLesson = () => {
    setNamePopUp("trial");
    dispatch(setCard({ id, avatar_url, name, surname }));
  };
  return (
    <BtnTrialLessons onClick={handleBtnTrialLesson}>
      Book trial lesson
    </BtnTrialLessons>
  );
};

BtnTrialLesson.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
  id: propTypes.string,
  avatar_url: propTypes.string,
  name: propTypes.string,
  surname: propTypes.string,
};
