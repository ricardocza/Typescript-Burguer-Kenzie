import styled from "styled-components";

export const StyledRegistrerPage = styled.section`
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 500px;
  width: 100%;

  & p {
    color: var(--color-grey300);
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  & > form :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h1 {
      font-size: 1.125rem;
    }

    & > a {
      color: var(--color-grey300);
      text-decoration: underline;
    }
  }

  @media (min-width: 850px) {
    flex-direction: row;
    gap: 4rem;
    max-width: 1000px;
    height: 90vh;
    align-items: center;

    & > form {
      width: 500px;
    }

    & > div > ul {
      display: flex;
    }

    & > section {
      padding: 1rem;
      box-shadow: 0 0 36px -10px var(--color-grey300);
      border-radius: 12px;
      & > form {
        box-shadow: none;
        border: none;
      }
    }
  }
`;
