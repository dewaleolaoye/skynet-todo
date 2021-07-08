import TodoList from '../../components/Todo/TodoList';

const Home = (props) => {
  console.log('i am here oooo');
  return (
    <div>
      <h1>This Home page</h1>
      <TodoList />
      {props.children}
    </div>
  );
};

export default Home;
