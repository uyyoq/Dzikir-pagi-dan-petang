import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

const TodoApp = (props) => {
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

  // const randomClick = () => {
  //   setClick(true)
  //   setSelect(todos.[Math.floor(Math.random()*todos.length)])
  // }

    // Function to shuffle the array content
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {

          // Generate random number
          var j = Math.floor(Math.random() * (i + 1));

          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }

      return array;
  }

  // Function to show the result
  function show() {
      const arr = todos
      const arr1 = shuffleArray(arr)
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
        {/* <p>{randomTodo}</p> */}
        <p>{show}</p>
        <button className="py-2 px-4 m-2  bg-blue-500 text-white rounded" onclick={show()}>acak semua item</button>
        <button className="py-2 px-4 m-2 bg-blue-500 text-white rounded" onClick={() => setTodos([])}>hapus semua item</button>
      </div>

    </div>
  );
};

export default TodoApp;