import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import axios from 'axios'

function QuotesTable() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/api/quotes`)
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
