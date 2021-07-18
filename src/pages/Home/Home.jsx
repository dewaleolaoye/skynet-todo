import TodoList from '../../components/Todo/TodoList';

const Home = (props) => {
  return (
    <div>
      <TodoList />
      {props.children}
    </div>
  );
};

export default Home;
