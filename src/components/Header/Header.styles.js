import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0;
  margin-bottom: 20px;
`;


export const LogoImg = styled.img`
  width: 150px;

  @media screen and (max-width: 500px) {
      width: 150px;
  }

`;

