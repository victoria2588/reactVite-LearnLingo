import propTypes from "prop-types";
import { LoginForm } from "./LoginForm/LoginForm";
import { SignInForm } from "./RegistrationForm/RegistrationForm";
import { ModalTrialLesson } from "./ModalTrialLesson/ModalTrialLesson";

export const SelectorPopUp = ({ namePopUp, onClose }) => {
  switch (namePopUp) {
    case "login":
      return <LoginForm onClose={onClose} />;
    case "signin":
      return <SignInForm onClose={onClose} />;
    case "trial":
      return <ModalTrialLesson onClose={onClose} />;
    default:
  }
  return <></>;
};

SelectorPopUp.propTypes = {
  namePopUp: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};
