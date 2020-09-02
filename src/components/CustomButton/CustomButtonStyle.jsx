import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #3a3a3a;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #3a3a3a;
    border: 1px solid #3a3a3a;
  }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: 40rem;
  height: 50px;
  letter-spacing: 2px;
  line-height: 5rem;
  padding: 0 2rem 0 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Lato";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  text-decoration-style: none;

  ${getButtonStyles}
`;
