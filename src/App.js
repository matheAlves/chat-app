import { ChatEngine } from 'react-chat-engine';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegistrationForm from './components/Feed/Login/RegistrationForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegistrationForm />,
  },
  {
    path: '/chat',
    element: <ChatEngine
      height="100vh"
      projectID="
      b027da1d-5f95-49a5-9f9c-fe9bf58a6630"
      userName="admin"
      userSecret="12345"
    />,
  },
]);

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
