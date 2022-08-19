import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  min-height: 60px;
  padding: 0 24px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  font-weight: bold;
  line-height: 58px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  cursor: pointer;
  box-shadow: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
