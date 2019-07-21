import React from "react";
import styled from "styled-components";

const Container = styled.span``;

interface IProps {
  number: Number;
}

const Number: React.FunctionComponent<IProps> = ({ number }) => (
  <Container>{number}</Container>
);

export default Number;
