import { useState } from 'react';
import UsersTable from './api/UsersTable';
import MaleUsersTable from './api/MaleUsersTable'
import QuotesTable from './api/QuotesTable'
import CarsTable from './api/CarsTable';
import CitiesTable from './api/CitiesTable';

function App() {
  const [selectedOption, setSelectedOption] = useState('users');

  function renderTable() {
    switch (selectedOption) {
      case 'users':
        return <UsersTable />;
      case 'male-users':
        return <MaleUsersTable />;
      case 'quotes':
        return <QuotesTable />;
      case 'cars':
        return <CarsTable />;
      case 'cities':
        return <CitiesTable />;
      default:
        return null;
    }
  }

  return (
    <div className='main'>
      <select
        className='decorated'
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="users">1. Users</option>
        <option value="male-users">2. Male Users</option>
        <option value="quotes">3. Quotes</option>
        <option value="cars">4. Cars</option>
        <option value="cities">5. Cities</option>
      </select>

      {renderTable()}
    </div>
  );
}

export default App;
