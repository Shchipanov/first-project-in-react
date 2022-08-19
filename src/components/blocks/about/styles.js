import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  display: flex;
  position: relative;
  min-height: 550px;
  padding-top: 146px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.colorForabout};
  align-items: center;
  z-index: 1;
  flex-direction: column;
  padding-left: 90px;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 90px;
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled(Paragraph)`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 650px;
  z-index: 3;
`;
