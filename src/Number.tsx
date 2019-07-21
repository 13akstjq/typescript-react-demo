import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isRed: boolean }>`
  color: ${props => (props.isRed ? "Red" : "Green")};
`;

interface IProps {
  number: Number;
}

const Number: React.FunctionComponent<IProps> = ({ number }) => (
  <Container isRed={number >= 10 ? true : false}>{number}</Container>
);

export default Number;
