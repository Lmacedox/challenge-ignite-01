import styled from "styled-components";
import TrashTodoSvgIcon from "../../assets/trash-todo-icon.svg";

interface ITodoCard {
  isCompleted: boolean;
}

const WrapperTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 46rem;
  width: 100%;
  min-height: 17.93rem;
`;

const HeaderTodoList = styled.header`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;

    span {
      padding: 0.12rem 0.5rem;

      background: var(--gray-400);
      border-radius: 0.62rem;

      font-weight: 700;
      font-size: 0.75rem;

      color: var(--gray-200);
    }
  }

  .created-tasks {
    color: var(--Blue);
  }
  .concluded-tasks {
    color: var(--Purple);
  }
`;

const SectionTodoList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  padding: 4rem 0;

  border-top: 0.06rem solid var(--gray-400);
  border-radius: 0.5rem;

  .todo-list-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    text-align: center;
    font-size: 1rem;
    line-height: 1.37rem;

    color: var(--gray-300);
  }

  input {
    background-image: url("../../assets/trash-todo-icon.svg");
  }
`;

const CardTodo = styled.div<ITodoCard>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.31rem 1.31rem 1rem 1rem;

  width: 100%;

  background: var(--gray-500);

  border: 0.06rem solid var(--gray-400);
  box-shadow: 0rem 0.12rem 0.5rem, rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;

  div {
    display: flex;
    align-items: flex-start;

    gap: 0.93rem;
    margin-right: 0.62rem;

    p {
      text-decoration: ${(e) => e.isCompleted && "line-through"};
      font-weight: 400;
      font-size: 0.87rem;
      line-height: 1.25rem;
      color: var(${(e) => (e.isCompleted ? "--gray-300" : "--gray-100")});
    }
  }

  button {
    background: inherit;
    cursor: pointer;

    div {
      width: 1.06rem;
      height: 1.06rem;
      border: 0.15rem solid var(--Blue);
      border-radius: 50%;

      &:hover {
        filter: brightness(0.6);
      }
    }

    img {
      &:hover {
        filter: brightness(0.6);
      }
    }
  }
`;

export { WrapperTodoList, HeaderTodoList, SectionTodoList, CardTodo };
