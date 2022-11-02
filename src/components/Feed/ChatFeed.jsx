import { ChatSettings } from 'react-chat-engine';
import MessageForm from './MessageForm';
import OutgoingMessage from './OutgoingMessage';
import IncomingMessage from './IncomingMessage';

function Feed(props) {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const LastMessageKey = index === 0 ? null : message[index - 1];
      const isIncomingMessage = userName === message.sender.username;

      return (
        <div key={ `msg_${index}` } style={ { width: '100%' } }>
          <div className="message-block">
            {
              isIncomingMessage
                ? <IncomingMessage />
                : <OutgoingMessage />
            }
          </div>
        </div>
      );
    });
  };

  return (
    <div />
  );
}

export default Feed;
