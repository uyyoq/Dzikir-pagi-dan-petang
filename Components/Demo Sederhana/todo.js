import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="flex">
      <div
        className="py-2 px-5 w-4/6 m-1 rounded"
        style={{ backgroundColor: todo.isCompleted ? "gray" : "white" }}>
        {todo.text}
      </div>
      <div>
        <button className="py-2 px-5 font-bold m-1 mx-2 hover:bg-green-500 bg-green-400 text-white rounded" type="button" onClick={() => completeTodo(index)}>
          v
         </button>
        <button className="py-2 px-5 font-bold m-1 hover:bg-red-500 bg-red-400 text-white rounded" type="button" onClick={() => removeTodo(index)}>
          -
        </button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func
};

export default Todo;