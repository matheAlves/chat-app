import { ChatEngine } from 'react-chat-engine';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import LoginForm from './Components/Login/LoginForm';
import MyContext from './Provider/Context';

function App() {
  const { username, secret } = useContext(MyContext);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginForm />,
    },
    {
      path: '/chat',
      element: <ChatEngine
        height="100vh"
        projectID="b027da1d-5f95-49a5-9f9c-fe9bf58a6630"
        userName={ username }
        userSecret={ secret }
      />,
    },
  ]);

  return (
    <RouterProvider router={ router }>
      <LoginForm />
    </RouterProvider>
  );
}

export default App;
