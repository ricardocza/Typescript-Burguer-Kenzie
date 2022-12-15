import styled from "styled-components";

export const StyledCard = styled.li`
  width: 300px;
  border: 2px solid var(--color-grey100);
  border-radius: 8px;

  &:hover {
    border: 2px solid var(--color-primary);
    transform: scale(1.05);
    transition: 0.3s;
  }

  & > figure {
    width: 100%;
    background-color: var(--color-grey0);
    display: flex;
    justify-content: center;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    padding: 1rem;
    & > button {
      width: 110px;
      height: 40px;
    }
  }
`;
