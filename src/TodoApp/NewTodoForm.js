import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="Task"
          onChange={handleChange}
          value={task}
        />
        <button>Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
