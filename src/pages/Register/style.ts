import styled from "styled-components";

export const StyledRegistrerPage = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 500px;
  width: 100%;

  & > img {
    max-width: 230px;
    width: 100%;
  }

  & p {
    color: var(--color-grey300);
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      color: var(--color-grey300);
      text-decoration: underline;
    }

    & figure {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #27ae6020;
      border-radius: 8px;

      & img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
