import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 600;
  line-height: 28px;
  font-size: 1rem;
  width: 100%;
  height: 3.75rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  outline: none;

  &:hover {
    background-color: var(--color-primary50);
    border: 1px solid var(--color-primary50);
    outline: var(--color-primary50);

    transition: 0.25s;
  }
`;

export const StyledButtonGrey = styled.button`
  background-color: var(--color-grey0);
  color: #999999;
  font-weight: 600;
  line-height: 28px;
  font-size: 1rem;
  width: 100%;
  height: 3.75rem;
  border: 1px solid var(--color-grey0);
  border-radius: 8px;

  &:hover {
    background-color: var(--color-grey300);
    border: 1px solid var(--color-grey300);
    color: var(--color-grey100);
    transition: 0.25s;
  }
`;
