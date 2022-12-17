import styled from "styled-components";

export const StyledTotals = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 2px solid var(--color-grey100);
  margin-top: 16px;

  & > div {
    display: flex;
    justify-content: space-between;

    & > h2 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-grey300);
    }
  }
`;
