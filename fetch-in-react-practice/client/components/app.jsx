import React, { useState, useEffect } from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      setTodos(todos);
    };

    fetchData()
      .catch(console.error);
  }, []);

  const handleSubmit = newTodo => {
    const addData = async () => {
      const response = await fetch('/api/todos',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTodo)
        });
      const newTask = await response.json();
      const copyTodos = todos;
      const totalTodos = copyTodos.concat(newTask);
      setTodos(totalTodos);
    };
    addData()
      .catch(console.error);
  };

  // handleSubmit(newTodo) {
  //   /**
  //   * Use fetch to send a POST request to `/api/todos`.
  //   * Then 😉, once the response JSON is received and parsed,
  //   *   - create a shallow copy of the todos array from state
  //   *   - add the todo received from the server to the copied array
  //   *   - replace the old todos array in state with the new one
  //   *
  //   * DO NOT MUTATE the original state array, nor any objects within it.
  //   * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
  //   *
  //   * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
  //   * and specify the "Content-Type" header as "application/json"
  //   *
  //   * TIP: Use Array.prototype.concat to create a new array containing the contents
  //   * of the old array, plus the object returned by the server.
  //   */

  const toggleCompleted = todoId => {
    const findTodoIndex = todos.findIndex(todo => todo.todoId === todoId);
    const status = todos[findTodoIndex].isCompleted;
    const newStatus = { isCompleted: !status };
    const patchData = async () => {
      const response = await fetch(`api/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todos[findTodoIndex])
      });
      const foundTodo = await response.json();
      const newTodos = todos.slice();
      foundTodo.isCompleted = newStatus.isCompleted;
      newTodos[findTodoIndex] = foundTodo;
      setTodos(newTodos);
    };
    patchData()
      .catch(console.error);
  };

  // toggleCompleted(todoId) {
  //   /**
  //    * Find the index of the todo with the matching todoId in the state array.
  //    * Get its "isCompleted" status.
  //    * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
  //    * Use fetch to send a PATCH request to `/api/todos/${todoId}`
  //    * Then 😉, once the response JSON is received and parsed,
  //    *   - create a shallow copy of the todos array from state
  //    *   - replace the old todo with the todo received from the server
  //    *   - replac the old todos in the state with the new one (you know the index).
  //    *
  //    * NOTE: "toggle" means to flip back and forth, so clicking a todo
  //    * in the list repeatedly should "toggle" its isCompleted status back and forth.
  //    *
  //    * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
  //    *
  //    * DO NOT MUTATE the original state array, nor any objects within it.
  //    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
  //    *
  //    * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
  //    * And specify the "Content-Type" header as "application/json"
  //    */

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App"/>
          <TodoForm onSubmit={handleSubmit}/>
          <TodoList todos={todos} toggleCompleted={toggleCompleted}/>
        </div>
      </div>
    </div>
  );
}
