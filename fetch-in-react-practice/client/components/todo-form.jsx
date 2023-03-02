import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function TodoForm(props) {
  // const [task, setTask] = useState({ task: '' });
  const { register, handleSubmit, reset, formState, formState: { errors } } = useForm({
    defaultValues: {
      task: ''
    }
  });

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     task: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // const handleChange = (event) {
  //   this.setState({
  //     task: event.target.value
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const newTodo = {
  //     task: this.state.task,
  //     isCompleted: false
  //   };
  //   this.props.onSubmit(newTodo);
  //   this.setState({ task: '' });
  // }

  const onSubmit = data => {
    // console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-control"
        placeholder="What to do?"
        {...register('task', { required: true, minLength: 2 })}/>
        {errors.task && <p>This is required.</p>}
      <div className="input-group-append">
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  );
}
