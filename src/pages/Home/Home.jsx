import TodoList from '../../components/Todo/TodoList';

const Home = (props) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <TodoList />
      {props.children}
    </div>
  );
};

export default Home;
