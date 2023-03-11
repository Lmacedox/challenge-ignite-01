import { FormEvent, useEffect, useState } from "react";
import CreateTodoIcon from "../../assets/create-todo-icon.svg";
import { TodoList } from "../todo-list/todo-list";
import { FormStyled, Wrapper } from "./todo-form.styled";
import { v4 as uuidv4 } from "uuid";

export interface ITodo {
  id: string;
  description: string;
  isCompleted: boolean;
}

export const FormTodo: React.FC = () => {
  const [todosList, setTodosList] = useState<ITodo[]>([]);
  const [newTodoDescriptionText, setNewTodoDescriptionText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      description: newTodoDescriptionText,
      isCompleted: false,
    };

    setTodosList([...todosList, newTodo]);
    setNewTodoDescriptionText("");
  };

  const handleDeleteTodo = (todoID: string) => {
    const newTodoList = todosList.filter((todoItem) => todoItem.id !== todoID);

    setTodosList(newTodoList);
  };

  const handleChangeInStatusOfTodo = (todoID: string) => {
    const newTodos = todosList.map((todoItem) => {
      if (todoItem.id === todoID) {
        return {
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        };
      }

      return todoItem;
    });

    if (newTodos) setTodosList(newTodos);
  };

  useEffect(() => {
    const todoListStorage = localStorage.getItem("todoList");
    if (todoListStorage) setTodosList(JSON.parse(todoListStorage));
  }, []);

  useEffect(() => {
    if (todosList.length)
      localStorage.setItem("todoList", JSON.stringify(todosList));
  }, [todosList]);

  return (
    <Wrapper>
      <FormStyled onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTodoDescriptionText}
          onChange={(e) => setNewTodoDescriptionText(e.target.value)}
        />
        <button>
          Criar
          <img
            src={CreateTodoIcon}
            alt="Icone de mais em botão de adicionar to-do"
          />
        </button>
      </FormStyled>

      <TodoList
        todoList={todosList}
        handleDeleteTodo={handleDeleteTodo}
        handleChangeInStatusOfTodo={handleChangeInStatusOfTodo}
      />
    </Wrapper>
  );
};
