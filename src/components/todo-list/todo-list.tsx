import {
  WrapperTodoList,
  HeaderTodoList,
  SectionTodoList,
  CardTodo,
} from "./todo-list.style";
import EmptyTodoSvgIcon from "../../assets/empty-todo-icon.svg";
import TodoCompletedIcon from "../../assets/todo-completed.icon.svg";
import TrashTodoSvgIcon from "../../assets/trash-todo-icon.svg";
import { ITodo } from "../todo-form/todo-form";

interface IProps {
  todoList: ITodo[];
  handleDeleteTodo: (todoID: string) => void;
  handleChangeInStatusOfTodo: (todoID: string) => void;
}

export const TodoList: React.FC<IProps> = ({
  todoList,
  handleDeleteTodo,
  handleChangeInStatusOfTodo,
}) => {
  const todoQuantity = todoList.length;
  const todosCompletedQuantity = todoList.filter(
    (todo) => todo.isCompleted
  ).length;

  return (
    <WrapperTodoList>
      <HeaderTodoList>
        <div>
          <h4 className="created-tasks">Tarefas criadas</h4>
          <span>{todoList.length}</span>
        </div>
        <div>
          <h4 className="concluded-tasks">Concluidas</h4>
          <span>
            {todoList.length
              ? `${todosCompletedQuantity} de ${todoQuantity}`
              : 0}
          </span>
        </div>
      </HeaderTodoList>
      <SectionTodoList>
        {todoList.length ? (
          todoList.map((e) => (
            <CardTodo key={e.id} isCompleted={e.isCompleted}>
              <div>
                <button onClick={() => handleChangeInStatusOfTodo(e.id)}>
                  {e.isCompleted ? (
                    <img src={TodoCompletedIcon} alt="ALT" />
                  ) : (
                    <div />
                  )}
                </button>
                <p>{e.description}</p>
              </div>
              <button onClick={() => handleDeleteTodo(e.id)}>
                <img src={TrashTodoSvgIcon} alt="ALT" />
              </button>
            </CardTodo>
          ))
        ) : (
          <div className="todo-list-empty">
            <img src={EmptyTodoSvgIcon} alt="ALT" />
            <div>
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </SectionTodoList>
    </WrapperTodoList>
  );
};
