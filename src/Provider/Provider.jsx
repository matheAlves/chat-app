import { useMemo, useState } from 'react';
import MyContext from './Context';

function MyProvider({ children }) {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');

  const contextValue = useMemo(() => (
    { username, setUsername, secret, setSecret }), [username, secret]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
