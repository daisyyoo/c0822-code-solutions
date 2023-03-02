// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// function TodoForm() {
//   const [task, setTask] = useState({ task: '' });
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     task: ''
//   //   };
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleSubmit = this.handleSubmit.bind(this);
//   // }

//   // const handleChange = (event) {
//   //   this.setState({
//   //     task: event.target.value
//   //   });
//   // }

//   // handleSubmit(event) {
//   //   event.preventDefault();
//   //   const newTodo = {
//   //     task: this.state.task,
//   //     isCompleted: false
//   //   };
//   //   this.props.onSubmit(newTodo);
//   //   this.setState({ task: '' });
//   // }

//   return (
//     <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
//       <input
//         required
//         autoFocus
//         type="text"
//         value={task}
//         className="form-control"
//         placeholder="What to do?"
//         {...register(task)}/>
//       <div className="input-group-append">
//         <button type="submit" className="btn btn-primary">Add Todo</button>
//       </div>
//     </form>
//   );
// }

// export default TodoForm;
