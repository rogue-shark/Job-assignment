import { useEffect, useState } from 'react';
import Header from '../components/Header';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Header text='Users Table' condition='Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.' />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Income</th>
            <th>Car Brand</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{`${user.first_name} ${user.last_name}`}</td>
              <td>{user.email}</td>
              <td>{user.income}</td>
              <td>{user.car}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UsersTable;
