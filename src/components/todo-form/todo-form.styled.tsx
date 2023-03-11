import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
`;

const FormStyled = styled.form`
  display: flex;

  gap: 0.5rem;

  max-width: 46rem;
  width: 100%;

  position: relative;
  bottom: 1.62rem;

  @media (max-width: 28.12rem) {
    flex-wrap: wrap;

    button {
      width: 100%;
    }
  }

  input {
    padding: 1rem;
    width: 39.87rem;
    height: 3.37rem;
    background: var(--gray-500);
    border: 0.1rem solid var(--gray-700);
    border-radius: 0.5rem;

    &:focus {
      outline: 0.01rem solid var(--PurpleDark);
    }

    color: var(--gray-100);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    gap: 0.5rem;
    width: 5.6rem;
    height: 3.25rem;

    @media (max-width: 28.12rem) {
      width: 100%;
    }

    cursor: pointer;
    background: var(--BlueDark);
    border-radius: 0.5rem;

    font-family: "Inter";
    font-weight: 700;
    font-size: 0.87rem;

    color: var(--gray-100);

    &:hover {
      transition: 0.4s;
      filter: brightness(1.2);
    }

    &:not(:hover) {
      transition: 0.4s;
      filter: initial;
    }
  }
`;

export { Wrapper, FormStyled };
