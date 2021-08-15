import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

const TodoApp = (props) => {
  const [todos, setTodos] = useState([
    { text: "Bersepeda pagi", isCompleted: false },
    { text: "Menyiapkan bekal anak", isCompleted: false },
  ]);

  function shuffleArray(arr) {
    return Array(arr.length)
      .fill(null)
      .map((_, i) => [Math.random(), i])
      .sort(([a], [b]) => a - b)
      .map(([, i]) => arr[i]);
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const totalTodo = todos.length;

  // Function to show the result
  function getRandom() {
    let value = shuffleArray(todos);
    setTodos(value);
  }

  return (
    <div className="flex justify-center mx-auto">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <div className="flex flex-col mx-8">
        <p className="px-4 font-bold text-white">Jumlah Kegiatan {totalTodo} </p>
        {/* <p>{randomTodo}</p> */}
        <button
          className="py-4 px-4 m-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={() => getRandom()}
        >
          acak semua item
        </button>
        <button
          className="py-4 px-4 m-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={() => setTodos([])}
        >
          hapus semua item
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
