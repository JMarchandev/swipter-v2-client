import MessageRow from "./messageRow";
import { MessageType } from "../../services/types/Message";

type Props = {
  messages: MessageType[];
};

export const ConversationList = ({ messages }: Props) => {
  return (
    <>
      {messages.map((message) => (
        <MessageRow message={message} />
      ))}
    </>
  );
};

export default ConversationList;
