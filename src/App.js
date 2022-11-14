import { ChatEngine } from 'react-chat-engine';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import LoginForm from './Components/Login/LoginForm';
import MyContext from './Provider/Context';

function App() {
  const { username, secret } = useContext(MyContext);
  const projectId = process.env.REACT_APP_PROJECT_ID;
  const router = createBrowserRouter([
    {
      path: '/chat-app',
      element: <LoginForm />,
    },
    {
      path: 'chat-app/chat',
      element: <ChatEngine
        height="100vh"
        projectID={projectId}
        userName={username}
        userSecret={secret}
      />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <LoginForm />
    </RouterProvider>
  );
}

export default App;
