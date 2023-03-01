import React, { useState, useEffect } from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default function App() {
  const [todos, setTodos] = useState([]);

  // this.addTodo = this.addTodo.bind(this);
  // this.toggleCompleted = this.toggleCompleted.bind(this);

  useEffect(() => {
    async function getResponse() {
      const response = await fetch('/api/todos');
      if (!response.ok) {
        const message = (`An error has occurred: ${response.status}`);
        throw new Error(message);
      }
      const todos = response.json();
      setTodos(todos);
    }
    getResponse().catch(err => err.message('Something went wrong!'));
  });

  // componentDidMount() {
  //   /**
  //    * Use fetch to send a GET request to `/api/todos`.
  //    * Then 😉, once the response JSON is received and parsed,
  //    * update state with the received todos.
  //    */
  //   fetch('/api/todos')
  //     .then(res => res.json())
  //     .then(todos => this.setState({ todos }))
  //     .catch(err => console.error(err));
  // }

  useEffect(newTodo => {
    async function getResponse() {
      const response = await fetch('/api/todos',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTodo)
        });
      if (!response.ok) {
        const message = (`An error has occurred: ${response.status}`);
        throw new Error(message);
      }
      const origTodos = response.json();
      const copyTodos = origTodos.concat(newTodo);
      setTodos({ todos: copyTodos });
    }
    getResponse().catch(err => err.message('Something went wrong!'));
  }, [todos]);

  // addTodo(newTodo) {
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
  //   fetch('/api/todos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newTodo)
  //   })
  //     .then(res => res.json())
  //     .then(newTodo => {
  //       const origTodos = this.state.todos;
  //       const copyTodos = origTodos.concat(newTodo);
  //       this.setState({ todos: copyTodos });
  //     })
  //     .catch(err => console.error(err));
  // }

  useEffect(todoId => {
    const findTodoIndex = todos.findIndex(todo => todo.todoId === todoId);
    const status = todos[findTodoIndex].isCompleted;
    const newStatus = { isCompleted: !status };
    async function getResponse() {
      const response = await fetch(`api/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todos[findTodoIndex])
      });
      if (!response.ok) {
        const message = (`An error has occurred: ${response.status}`);
        throw new Error(message);
      }
      const foundTodo = response.json();
      const newTodos = todos.slice();
      foundTodo.isCompleted = newStatus.isCompleted;
      newTodos[findTodoIndex] = foundTodo;
      setTodos({ todos: newTodos });
    }
    getResponse().catch(err => err.message('Something went wrong!'));
  }, [todos]);

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
  //   const findTodoIndex = this.state.todos.findIndex(todo => todo.todoId === todoId);
  //   const status = this.state.todos[findTodoIndex].isCompleted;
  //   const newStatus = { isCompleted: !status };
  //   fetch(`/api/todos/${todoId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state.todos[findTodoIndex])
  //   })
  //     .then(res => res.json())
  //     .then(foundTodo => {
  //       const newTodos = this.state.todos.slice();
  //       foundTodo.isCompleted = newStatus.isCompleted;
  //       newTodos[findTodoIndex] = foundTodo;
  //       this.setState({ todos: newTodos });
  //     })
  //     .catch(err => console.error(err));
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App"/>
          <TodoForm />
          {/* onSubmit={this.addTodo}/> */}
          <TodoList todos={todos} />
          {/* toggleCompleted={this.toggleCompleted}/> */}
        </div>
      </div>
    </div>
  );
}
