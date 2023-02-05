import styled from '@emotion/styled';

export const Container = styled.footer`
  font-size: 0.8rem;
  position: fixed;
  background-color: var(--secondary2);
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  border-top: 0.06rem solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  gap: 2rem;
  & > div {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 0.8rem;
      a {
        font-weight: 300;
        display: flex;
        align-items: center;
        background-color: var(--primary1);
        color: var(--secondary1);
        border-radius: 2rem;
        padding: 0.3rem 1rem;
        gap: 0.8rem;
        transition: all 0.2s;
        &:hover {
          background-color: var(--primary2);
          color: var(--primary1);
        }
      }
    }
  }
  @media screen and (max-width: 1023px) {
    & {
      display: none;
    }
  }
`;
