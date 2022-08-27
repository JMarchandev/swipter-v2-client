import MessageRow from "./messageRow";
import { MessageType } from "../../services/types/Message";

type Props = {
  messages: MessageType[];
};

export const ConversationList = ({ messages }: Props) => {
  return (
    <>
      {messages.map((message, i) => (
        <MessageRow key={message.pet.name + i} message={message} />
      ))}
    </>
  );
};

export default ConversationList;
