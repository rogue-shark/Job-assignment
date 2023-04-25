import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading'
import axios from 'axios'

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/api/cities`)
      .then(response => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (!users) return null;

  if (isLoading) {
    return <Loading />;
  }

  function roundedString (numString) {
    return `$${Number(numString).toFixed(2)}`
  }

  return (
    <>
    <Header text='Top 10 Cities Table' condition='Show the data of top 10 cities which have the highest number of users and their average income.' />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>No. of users</th>
          <th>Avg Income</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.count}</td>
            <td>{roundedString(user.avg_income)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default UsersTable;
