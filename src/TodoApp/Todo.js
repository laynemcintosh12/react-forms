import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const handleChange = evt => {
    setEditTask(evt.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  // default todo view
  let htmlDiv = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );

  // todo view when editing
  if (isEditing) {
    htmlDiv = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return htmlDiv;
}

export default Todo;
