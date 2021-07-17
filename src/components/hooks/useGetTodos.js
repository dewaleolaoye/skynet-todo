import { useQuery } from 'react-query';
import { client, hostApp } from '../../constant';

const getTodos = async () => {
  const token = window.localStorage.getItem('s_token');
  if (!token || typeof token === 'undefined' || token === null) return;

  try {
    const mySky = await client.loadMySky(hostApp);

    const { data } = await mySky.getJSON(hostApp);

    return data;
  } catch (error) {
    console.log(error, 'ERROR');
  }

  // return data
};

export default function useGetTodos() {
  return useQuery('goldSilverSellRequest', getTodos);
}
