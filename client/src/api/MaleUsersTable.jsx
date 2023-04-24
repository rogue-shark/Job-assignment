import { useEffect, useState } from 'react';
import Header from '../components/Header';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL

  useEffect(() => {
    fetch(`${BASE_URL}/api/male-users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
    <Header text='Male Users Table' condition='Male Users which have phone price greater than 10,000.' />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Income</th>
          <th>Phone Price</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{`${user.first_name} ${user.last_name}`}</td>
            <td>{user.email}</td>
            <td>{user.income}</td>
            <td>{numberWithCommas(user.phone_price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  );
}

export default UsersTable;
