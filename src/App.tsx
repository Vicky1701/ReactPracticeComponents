import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>React Practice Components</h1>
      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
