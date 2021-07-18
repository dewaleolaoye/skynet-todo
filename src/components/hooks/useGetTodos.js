import { useQuery } from 'react-query';
import { client, hostApp } from '../../constant';
import { handleLogout } from '../../utils/handleLogout';

const getTodos = async () => {
  const token = window.localStorage.getItem('s_token');
  if (!token || typeof token === 'undefined' || token === null) return;

  try {
    const mySky = await client.loadMySky(hostApp);

    const { data } = await mySky.getJSON(hostApp);

    return data;
  } catch (error) {
    if (error.message === 'User seed not found') {
      handleLogout();
    }
  }
};

export default function useGetTodos() {
  return useQuery('getTodos', getTodos);
}
