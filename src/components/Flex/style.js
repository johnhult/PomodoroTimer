import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ col }) => col && "column"};
  flex-wrap: ${({ wr }) => wr && "wrap"};
  flex: ${({ flex }) => flex && flex};
  padding: ${({ padding }) => padding && padding};
  width: 100%;
  max-width: ${({ width }) => width && width};
  margin: ${({ am }) => am && "0 auto"};
`
