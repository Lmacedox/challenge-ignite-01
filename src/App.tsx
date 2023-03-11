import { Wrapper } from "./App.style";
import { Header } from "./components/header/header";
import { FormTodo } from "./components/todo-form/todo-form";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Wrapper>
        <main>
          <FormTodo />
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
