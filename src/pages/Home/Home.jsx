import TodoList from '../../components/Todo/TodoList';
import { handleLogout } from '../../utils/handleLogout';

const Home = (props) => {
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <TodoList />
      {props.children}
    </div>
  );
};

export default Home;
