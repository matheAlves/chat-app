import { ChatEngine } from 'react-chat-engine';
import Feed from './components/Feed/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="b027da1d-5f95-49a5-9f9c-fe9bf58a6630"
      userName="matheus"
      userSecret="293278"
      renderChatFeed={ (chatAppProps) => <Feed { ...chatAppProps } /> }
    />
  );
}

export default App;
