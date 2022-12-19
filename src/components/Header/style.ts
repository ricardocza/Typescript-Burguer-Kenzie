import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    border-radius: 12px;
  }
  & > img {
    max-width: 230px;
    width: 100%;
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid var(--color-grey0);
    box-shadow: var(--box-shadow);

    & > p {
      max-width: 340px;
      text-align: justify;

      & > span {
        color: black;
      }
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

  & > ul {
    margin-top: 20px;
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    row-gap: 30px;
    width: 180px;

    & > li {
      width: 10px;
      height: 10px;
      background-color: var(--color-grey100);
      border-radius: 50%;
    }
  }

  @media (max-width: 400px) {
    & > div > p {
      width: 65%;
    }
  }
`;
