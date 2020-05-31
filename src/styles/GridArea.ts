import styled from "styled-components";

type Props = {
  area: string
}

const GridArea = styled.div<Props>(props => `
  grid-area: ${props.area};
  background-color: #61abb8;
  color: black;
`);

export default GridArea;