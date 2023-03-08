import styled from "styled-components";

export const StyledInput = styled.fieldset`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem 0;

  & label {
    background-color: white;
    width: max-content;
    padding: 0.3rem;
    position: absolute;
    top: 0;
    left: 20px;
    opacity: 1;
  }

  & input {
    height: 3.125rem;
    padding-left: 1rem;
    color: var(--color-grey600);
    background-color: var(--color-grey0);
    border: 1px solid var(--color-grey0);
    border-radius: 0.5rem;
  }

  & input::placeholder {
    color: var(--color-grey300);
  }

  & input:focus {
    color: var(--color-grey600);
    background-color: white;
  }

  & input:focus::placeholder {
    color: white;
  }

  & button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }
`;
