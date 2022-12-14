import styled from "styled-components";

export const StyledModalBG = styled.div`
  background-color: #00000045;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const StyledModal = styled.div`
  width: 95%;
  max-width: 375px;
  max-height: 500px;
  background-color: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 8px;
  overflow: hidden;

  & > :nth-child(2):is(div) {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px 8px 0 0;
    padding: 0.75rem 1.25rem;
    background-color: var(--color-primary);
    color: var(--color-grey0);

    & > button {
      background-color: transparent;
      color: var(--color-grey0);
      font-size: 1.5rem;
      border: none;
    }
  }

  & > ul {
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
  }
`;
