import propTypes from "prop-types";

import { getTeachers } from "../../Redux/Catalog/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TeachersList } from "../../component/TeachersListCards/TeachersList";
import { Wrap } from "./Teachers.styled";

export default function TeachersPage({ setNamePopUp }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getTeachers({ signal: controller.signal }));
    return () => {
      return controller.abort();
    };
  }, [dispatch]);

  return (
    <Wrap>
      <TeachersList setNamePopUp={setNamePopUp} />
    </Wrap>
  );
}

TeachersPage.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
