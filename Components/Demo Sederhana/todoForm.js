import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        className="appearance-none rounded border py-4 px-4 m-1 text-sm focus:outline-none w-7/12"
        value={value}
        placeholder="Tambah Todo..."
        onChange={e => setValue(e.target.value)}
      />
        <button className="py-4 px-2 m-1 bg-blue-500 text-white rounded">Tambah kegiatan</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func
};

export default TodoForm;
