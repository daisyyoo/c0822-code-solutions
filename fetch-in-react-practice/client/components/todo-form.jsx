import React, { useState } from 'react';

export default function TodoForm(props) {
  const [task, setTask] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      task,
      isCompleted: false
    };
    props.onSubmit(newTodo);
    setTask('');
  };

  return (
    <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        type="text"
        name="task"
        value={task}
        onChange={event => setTask(event.target.value)}
        className="form-control"
        placeholder="What to do?"
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  );
}
