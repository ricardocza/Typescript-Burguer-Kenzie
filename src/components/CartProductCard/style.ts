import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  & > figure {
    width: 80px;
    height: 80px;
    background-color: var(--color-grey100);
    border-radius: 8px;
    display: flex;
    align-items: flex-end;

    & > img {
      width: 100%;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;

      gap: 4px;
      background-color: var(--color-grey100);
      width: max-content;
      padding: 3px 0;
      border-radius: 8px;

      & > input {
        width: 30px;

        text-align: center;
        background-color: white;
        outline: none;
        border: none;
        border-radius: 4px;
      }

      & > button {
        color: #e60000;
        width: 22px;
        height: 22px;
        border: none;
        background-color: transparent;
      }
    }
  }
  & > button {
    background-color: transparent;
    border: none;
  }
`;
