function IncomingMessage({ lastMessage, message }) {
  const isFirstMessageByUser = !lastMessage
  || lastMessage.sender.userName !== message.sender.username;
  return (
    <div>
      <div
        className="message-avatar"
        style={ { backgroundImage: `url(${message?.sender?.avatar})` } }
      />
      {
        message?.attachments?.length > 0
          ? (
            <img
              src={ message.attachments[0].file }
              alt="message attachment"
              className="message-image"
              style={ { marginLeft: isFirstMessageByUser ? '4px' : '48px' } }
            />
          ) : (
            (
              <div
                className="message"
                style={ { float: 'left',
                  marginLeft: isFirstMessageByUser ? '4px' : '48px',
                  color: 'white',
                  backgroundColor: '#CABCDC' } }
              >
                {message.text}
              </div>
            )
          )
      }
    </div>
  );
}

export default IncomingMessage;
