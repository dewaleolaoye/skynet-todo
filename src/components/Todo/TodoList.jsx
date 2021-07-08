import React from 'react';

const TodoList = () => {
  // const [] = ''
  const todoArray = [
    {
      key: 1,
      title: 'Yam',
    },
    {
      key: 2,
      title: 'Buy Books',
    },
    {
      key: 3,
      title: 'Rent House',
    },
  ];

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <form>
        <h2 className='label-wrapper'>
          <label htmlFor='new-todo-input' className='label__lg'>
            What needs to be done?
          </label>
        </h2>
        <input
          type='text'
          id='new-todo-input'
          className='input input__lg'
          name='text'
          autoComplete='off'
        />
        <button type='submit' className='btn btn__primary btn__lg'>
          Add
        </button>
      </form>

      <ul
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {todoArray.map(({ key, title }) => {
          return (
            <li className='todo stack-small' key={key}>
              <div className='c-cb'>
                <input id='todo-0' type='checkbox' defaultChecked={true} />
                <label className='todo-label' htmlFor='todo-0'>
                  {title}
                </label>
              </div>
              <div className='btn-group'>
                <button type='button' className='btn btn__danger'>
                  Delete <span className='visually-hidden'>{title}</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
