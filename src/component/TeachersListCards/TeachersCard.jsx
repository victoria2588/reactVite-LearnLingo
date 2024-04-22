import propTypes from "prop-types";
import toast from "react-hot-toast";
import {
  BtnReadMore,
  ImgAvatar,
  LiLevels,
  ListLevel,
  ListStatistic,
  NameTeacher,
  SpanDiscrp,
  SpanPrice,
  Statistic,
  StyleLi,
  StyleLiDiscrp,
  WrapAvatar,
  WrapCard,
  WrapDiscrp,
  WrapHeart,
  WrapListDiscrp,
  WrapStar,
  WrapSvgLessonBook,
  WrapSvgStatus,
} from "./TeachersCard.styled";
import { Status } from "../../assets/icons/Status";
import { LessonBook } from "../../assets/icons/LessonBook";
import { StarCard } from "../../assets/icons/StarCard";
import { Heart } from "../../assets/icons/Heart";
import { useState } from "react";
import { TeachersReadMore } from "./TeachersReadMore";
import { BtnTrialLesson } from "./BtnTrialLesson";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../Redux/Catalog/selectors";
import { delFavorite, setFavorite } from "../../Redux/Catalog/slice";
import { useAuth } from "../../Hooks/use-auth";
export const TeachersCard = ({ setNamePopUp, ...props }) => {
  const {
    id,
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = props;

  const [isReadMore, setIsReadMore] = useState(false);
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const isFavorite = favorite.some((e) => e.id === id);
  const auth = useAuth();

  const handleReadMore = () => {
    setIsReadMore(true);
  };
  const handleFavorite = () => {
    if (!auth.isLoggedIn) {
      toast.error("Please enter LogIn or Registration ");
      return;
    }
    if (!isFavorite && auth.isLoggedIn) {
      dispatch(setFavorite(props));
    } else {
      dispatch(delFavorite(props));
    }
  };

  return (
    <WrapCard>
      <WrapAvatar>
        <WrapSvgStatus>
          <Status />
        </WrapSvgStatus>
        <ImgAvatar src={avatar_url} alt="avatar" />
      </WrapAvatar>
      <WrapDiscrp>
        <WrapHeart onClick={() => handleFavorite()}>
          {isFavorite && auth.isLoggedIn ? (
            <Heart fill={"#F4C550"} />
          ) : (
            <Heart fill={"transparent"} />
          )}
        </WrapHeart>
        <Statistic>
          <ListStatistic>
            <StyleLi>Languages</StyleLi>
            <div>
              <StyleLi>
                <WrapSvgLessonBook>
                  <LessonBook />
                </WrapSvgLessonBook>
                Lessons online
              </StyleLi>
              <StyleLi>Lessons done:&nbsp;{lessons_done}</StyleLi>
              <StyleLi>
                <WrapStar>
                  <StarCard />
                </WrapStar>
                Rating:&nbsp;{rating}
              </StyleLi>
              <StyleLi>
                Price / 1 hour:&nbsp;<SpanPrice>{price_per_hour}$</SpanPrice>
              </StyleLi>
            </div>
          </ListStatistic>
        </Statistic>
        <NameTeacher>
          {name}&nbsp;{surname}
        </NameTeacher>
        <WrapListDiscrp>
          <StyleLiDiscrp>
            Speaks:&nbsp;<SpanDiscrp>{languages.join(", ")}</SpanDiscrp>
          </StyleLiDiscrp>
          <StyleLiDiscrp>
            Lesson Info:&nbsp;
            <SpanDiscrp>{lesson_info}</SpanDiscrp>
          </StyleLiDiscrp>
          <StyleLiDiscrp>
            Conditions:&nbsp;
            <SpanDiscrp>{conditions.join(", ")}</SpanDiscrp>
          </StyleLiDiscrp>
        </WrapListDiscrp>
        {!isReadMore && (
          <BtnReadMore onClick={handleReadMore}>Read more</BtnReadMore>
        )}

        {isReadMore && (
          <TeachersReadMore experience={experience} reviews={reviews} />
        )}
        <ListLevel>
          {levels.map((level, idx) => (
            <LiLevels key={idx}>#{level}</LiLevels>
          ))}
        </ListLevel>
        {isReadMore && (
          <BtnTrialLesson {...props} setNamePopUp={setNamePopUp} />
        )}
      </WrapDiscrp>
    </WrapCard>
  );
};

TeachersCard.propTypes = {
  setNamePopUp: propTypes.func.isRequired,

  id: propTypes.string,
  avatar_url: propTypes.string,
  conditions: propTypes.arrayOf(propTypes.string),
  experience: propTypes.string,
  languages: propTypes.arrayOf(propTypes.string),
  lesson_info: propTypes.string,
  lessons_done: propTypes.number,
  levels: propTypes.arrayOf(propTypes.string),
  name: propTypes.string,
  price_per_hour: propTypes.number,
  rating: propTypes.number,
  reviews: propTypes.arrayOf(
    propTypes.shape({
      comment: propTypes.string,
      reviewer_name: propTypes.string,
      reviewer_rating: propTypes.number,
    })
  ),
  surname: propTypes.string,
};
