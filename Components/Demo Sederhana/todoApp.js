import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

const TodoApp = () => {
  const [select, setSelect] = useState(null)
  const [click, setClick] = useState(false)
  const [todos, setTodos] = useState([
    { text: "Bersepeda pagi", isCompleted: false },
    { text: "Menyiapkan bekal anak", isCompleted: false },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const totalTodo = todos.length

  const handleClick = () => {
    ({
      setClick: true,
      select: todos[Math.floor(Math.random() * 
        this.state.notes.length)]
    })

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
        <p className="px-4 text-white">Jumlah Kegiatan {totalTodo} </p>
        <button className="py-2 px-4 m-2  bg-blue-500 text-white rounded">Acak</button>
        <button className="py-2 px-4 m-2 bg-blue-500 text-white rounded" onClick={() => setTodos([])}>hapus semua item</button>
      </div>

    </div>
  );
};

export default TodoApp;