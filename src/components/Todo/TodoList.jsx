import React, { useEffect, useState } from 'react';
import './TodoList.css';
import { nanoid } from 'nanoid';
import { client, hostApp } from '../../constant';
import useGetTodos from '../hooks/useGetTodos';

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  console.log(todos, 'THE TODOS');

  const { data, isLoading } = useGetTodos();

  useEffect(() => {
    if (data) {
      setTodos([data]);
    }
  }, [data]);

  const addTask = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const mySky = await client.loadMySky(hostApp);

      const jsonData = {
        id: nanoid(),
        title: value,
      };

      const { data: newTodo } = await mySky.setJSON(hostApp, jsonData);

      if (newTodo) {
        console.log(newTodo, 'NEW TODO');

        setTodos([...todos, newTodo]);

        setLoading(false);
        setValue('');
      }
    } catch (error) {
      console.log(error, 'ERROR');
      setLoading(false);
    }
  };

  return (
    <div className='todoapp'>
      <h1>Add Todos</h1>
      <form onSubmit={addTask}>
        <input
          type='text'
          required
          name='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>{loading ? 'loading...' : 'Add'}</button>
      </form>

      <ul className='todo-list' aria-labelledby='list-heading'>
        {todos &&
          todos.map((todo) => {
            return (
              <li className='todo' key={nanoid()}>
                <div>
                  <input id='todo-0' type='checkbox' />
                  <label className='todo-label' htmlFor='todo-0'>
                    {todo.title}
                  </label>
                </div>
                <div>
                  <button type='button' className='btn btn__danger'>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}

        {isLoading && <p>Loading data...</p>}
        {isLoading === false && todos.length <= 1 && (
          <p>You do not have any todos</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
