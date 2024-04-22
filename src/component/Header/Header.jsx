import propTypes from "prop-types";

import { Login } from "../../assets/icons/Login";
import { Logo_flag } from "../../assets/icons/Logo_flag";
import {
  ButtonLogin,
  ButtonRegister,
  Links,
  LinksPages,
  LinksTitlte,
  Span,
  Wrap,
  WrapButton,
  WrapLinksPage,
  WrapLogo,
  WrapLogoHome,
  WrapTeachersLogin,
} from "./Header.styled";
import { useAuth } from "../../Hooks/use-auth";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigate } from "react-router-dom";

export const Header = ({ setNamePopUp }) => {
  const { isLoggedIn } = useAuth();

  const handleLogin = () => {
    setNamePopUp("login");
    return <Navigate to="/login" />;
  };

  const handleSignIn = () => {
    setNamePopUp("signin");
    return <Navigate to="/login" />;
  };

  return (
    <Wrap>
      <WrapLogoHome>
        <WrapLogo>
          <Links to="/">
            <Logo_flag />
          </Links>
          <LinksTitlte to="/">LearnLingo</LinksTitlte>
        </WrapLogo>
      </WrapLogoHome>

      <WrapLinksPage>
        <LinksPages to="/">Home</LinksPages>
        <LinksPages to="teachers">Teachers</LinksPages>
        {isLoggedIn && <LinksPages to="favorites">Favorites</LinksPages>}
      </WrapLinksPage>
      <WrapTeachersLogin>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <WrapButton>
            <ButtonLogin type="button" onClick={handleLogin}>
              <Span>
                <Login />
              </Span>
              Log in
            </ButtonLogin>

            <ButtonRegister type="button" onClick={() => handleSignIn()}>
              Registration
            </ButtonRegister>
          </WrapButton>
        )}
      </WrapTeachersLogin>
    </Wrap>
  );
};

Header.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
