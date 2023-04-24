import Header from './Header';
import PropTypes from 'prop-types';

function UsersTable({ users }) {
  return (
    <>
      <Header text='Users Table' />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Car Brand</th>
            <th>Phone Price</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.carBrand}</td>
              <td>{user.phonePrice}</td>
              <td>{user.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({ //https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      carBrand: PropTypes.string.isRequired,
      phonePrice: PropTypes.number.isRequired,
      income: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default UsersTable;
