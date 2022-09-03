import { conversations, user } from "../../../services/constants";

import ChatInputText from "../../../components/messages/chat/chatInputText";
import ChatRow from "../../../components/messages/chat/chatRow";
import Layout from "../../../layout";
import { MessageType } from "../../../services/types/Message";

export const Chat = () => {
  const userImage = user.image;
  const interlocutorImage = conversations[0].pet.image;

  const isPrevMessageSameUser = (i: number) => {
    return (
      conversations[0].messages[i - 1].authorId ===
      conversations[0].messages[i].authorId
    );
  };

  return (
    <Layout>
      <div className="">
        <div className="max-w-4xl mx-auto space-y-3 grid grid-cols-1 p-3">
          {conversations[0].messages.map((message: MessageType, i: number) => {
            const isPrevSameUser = i > 0 && isPrevMessageSameUser(i)
            return (
              <ChatRow
                content={message.content}
                isUserMessage={message.authorId === user.id}
                image={
                  message.authorId === user.id ? userImage : interlocutorImage
                }
                interlocutorName={conversations[0].pet.name}
                isPrevMessageSameUser={isPrevSameUser}
              />
            );
          })}
        </div>
        <ChatInputText />
      </div>
    </Layout>
  );
};

export default Chat;
