import styled from "styled-components";

type Props = {
  area: string
}

const GridArea = styled.div<Props>(props => `
  grid-area: ${props.area};

  color: blue;
`);

export default GridArea;