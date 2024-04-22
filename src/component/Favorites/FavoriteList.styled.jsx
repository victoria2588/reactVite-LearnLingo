import styled from "styled-components";

export const StyleList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  }
`;
