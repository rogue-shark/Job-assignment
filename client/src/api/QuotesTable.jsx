import { useEffect, useState } from 'react';
import Header from '../components/Header';

function QuotesTable() {
  const [users, setUsers] = useState([]);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL

  useEffect(() => {
    fetch(`${BASE_URL}/api/quotes`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
    <Header text='Quotes Table' condition='Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.'/>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Quote</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{`${user.first_name} ${user.last_name}`}</td>
            <td>{user.email}</td>
            <td>{user.quote}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  );
}

export default QuotesTable;
