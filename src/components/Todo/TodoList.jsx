import React, { useEffect, useState } from 'react';
import './TodoList.css';
import { nanoid } from 'nanoid';
import { client, hostApp } from '../../constant';
import useGetTodos from '../hooks/useGetTodos';
import { handleLogout } from '../../utils/handleLogout';

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  console.log(todos, 'THE TODOS');

  const { data, isLoading } = useGetTodos();

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  const addTodo = async (e) => {
    e.preventDefault();

    setLoading(true);

    const jsonData = {
      id: nanoid(),
      title: value,
    };

    if (todos.length !== 0) {
      todos.push(jsonData);
    } else {
      todos.push(jsonData);
    }

    try {
      const mySky = await client.loadMySky(hostApp);

      const { data: newTodo } = await mySky.setJSON(hostApp, todos);

      if (newTodo) {
        console.log(newTodo, 'OLD TODO JOIN');

        setLoading(false);
        setValue('');
      }
      // }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    const filteredTodos = todos.filter((todo) => id !== todo.id);

    setTodos(filteredTodos);

    try {
      const mySky = await client.loadMySky(hostApp);

      await mySky.setJSON(hostApp, filteredTodos);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className='logout'>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className='todoapp'>
        <h1>Add Todos</h1>
        {isLoading ? (
          ''
        ) : (
          <form onSubmit={addTodo}>
            <input
              type='text'
              required
              name='text'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className='add-todo'
              disabled={loading ? true : false}
              type='submit'
              style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'loading...' : 'Add'}
            </button>
          </form>
        )}

        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <ul className='todo-list' aria-labelledby='list-heading'>
            {todos.map((todo) => {
              return (
                <li className='todo' key={nanoid()}>
                  <div>
                    <p>{todo.title}</p>
                  </div>

                  <div>
                    <button
                      type='button'
                      className='danger'
                      onClick={() => deleteTask(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {isLoading === false && todos.length === 0 && (
          <p>You do not have any todos</p>
        )}

        {error && <p className='error'>{error}</p>}
      </div>
    </>
  );
};

export default TodoList;
