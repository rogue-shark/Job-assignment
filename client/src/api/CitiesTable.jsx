import { useEffect, useState } from 'react';
import Header from '../components/Header';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL

  useEffect(() => {
    fetch(`${BASE_URL}/api/cities`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
    <Header text='Top 10 Cities Table' />
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user._id}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default UsersTable;
