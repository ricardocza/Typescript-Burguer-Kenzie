import styled from "styled-components";

export const StyledHomePage = styled.main`
  max-width: 37.5rem;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  & > header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 1.85rem 1rem;
    background-color: var(--color-grey0);

    & > section {
      display: flex;
      justify-content: space-between;
      align-items: center;

      max-width: 37.5rem;
      width: 100%;
      margin: 0 auto;

      & > div {
        display: flex;
        gap: 1rem;

        & > figure {
          cursor: pointer;
          position: relative;

          & > p {
            position: absolute;
            top: -24px;
            right: -10px;
            color: #ffffff;
            background-color: var(--color-primary);
            border: 1px solid var(--color-primary);
            border-radius: 4px;
            padding: 0.15rem;
          }
        }
      }
    }
  }
`;
