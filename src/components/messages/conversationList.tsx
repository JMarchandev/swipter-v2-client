import MessageRow from "./messageRow";
import { MessageType } from "../../services/types/Message";

type Props = {
  messages: MessageType[];
  onClickMessageRow: (id: number) => void
};

export const ConversationList = ({ messages, onClickMessageRow }: Props) => {
  return (
    <>
      {messages.map((message, i) => (
        <MessageRow key={message.pet.name + i} message={message} onClickMessageRow={onClickMessageRow} />
      ))}
    </>
  );
};

export default ConversationList;
