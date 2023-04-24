import { useEffect, useState } from 'react';
import Header from '../components/Header';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/cars`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Header
        text='Cars Table'
        condition='Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
'
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Car Brand</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{`${user.first_name} ${user.last_name}`}</td>
              <td>{user.email}</td>
              <td>{user.car}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UsersTable;
