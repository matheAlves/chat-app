/* eslint-disable react/jsx-indent-props */
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
      const lastMessageKey = index === 0 ? null : message[index - 1];
      const isIncomingMessage = userName === message.sender.username;

      return (
        <div key={ `msg_${index}` } style={ { width: '100%' } }>
          <div className="message-block">
            {
              isIncomingMessage
                ? <IncomingMessage message={ message } />
                : <OutgoingMessage
                  message={ message }
                  lastMessage={ messages[lastMessageKey] }
                />
            }
          </div>
          <div
            className="read-receipts"
            style={
              { marginRight: isIncomingMessage ? '18px' : '0px',
                marginLeft: isIncomingMessage ? '0px' : '68px' }
            }
          />
          read-receipts
        </div>
      );
    });
  };

  if (!chat) return 'Loading';

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat.title}
        </div>
        <div className="chat-subtitle">
          {chat.people.map((p) => `${p.person.username}`)}
        </div>
        {renderMessages()}
      </div>
      <div style={ { heigh: '100px' } } />
      <div className="message-form-container">
        <MessageForm { ...props } chatId={ activeChat } />
      </div>
    </div>
  );
}

export default Feed;
