import ImageCircle from "./imageCircle";
import { MessageType } from "../../services/types/Message";

type Props = {
  message: MessageType;
  onClickMessageRow: (id: number) => void;
};
export const MessageRow = ({ message, onClickMessageRow }: Props) => {
  const petNameRow = `${message.pet.name}, ${message.pet.age} ${
    message.pet.age > 1 ? "ans" : "an"
  }`;

  const lastMessageRow = `${message.lastMessage.text.slice(0, 29)} ${
    message.lastMessage.text.length > 30 ? "..." : ""
  }`;

  return (
    <div
      className="flex items-center justify-between mr-5"
      onClick={() => onClickMessageRow(message.id)}
    >
      <div className="p-3 flex items-center">
        <ImageCircle img={message.pet.image} alt={message.pet.name} />
        <div className="ml-3">
          <p className="text-black">{petNameRow}</p>
          <p className="text-sm">{lastMessageRow}</p>
        </div>
      </div>
      {!message.lastMessage.seen && (
        <div className="w-3 h-3 bg-sky-400 border rounded-full" />
      )}
    </div>
  );
};

export default MessageRow;
