import { ConversationType } from "../../services/types/Conversation";
import MessageRow from "./messageRow";

type Props = {
  conversations: ConversationType[];
  onClickMessageRow: (id: number) => void
};

export const ConversationList = ({ conversations, onClickMessageRow }: Props) => {
  return (
    <>
      {conversations.map((conversation, i) => (
        <MessageRow key={conversation.pet.name + i} message={conversation} onClickMessageRow={onClickMessageRow} />
      ))}
    </>
  );
};

export default ConversationList;
