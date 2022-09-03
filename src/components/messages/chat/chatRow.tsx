import CircleImage from "./circleImage";

type Props = {
  content: string;
  isUserMessage: boolean;
  image?: string;
  interlocutorName?: string;
  isPrevMessageSameUser: boolean
};

export const ChatRow = ({ content, isUserMessage, image, interlocutorName, isPrevMessageSameUser }: Props) => {
  return (
    <div
      className={`${
        isUserMessage
          ? "place-self-end text-right"
          : "place-self-start text-left"
      }`}
    >
      {!isPrevMessageSameUser && interlocutorName && <p className="text-sm">{isUserMessage ? "Vous" :  interlocutorName }</p>}
      <div className={`flex items-center`}>
        {!isPrevMessageSameUser && image && !isUserMessage && (
          <CircleImage className="mr-2" img={image} alt="rez" />
        )}
        <div
          className={`${
            isUserMessage
              ? "bg-[#FA6650] bg-opacity-70 text-black"
              : "border text-black"
          } p-3 rounded-2xl rounded-tl-none`}
        >
          {content}
        </div>
        {!isPrevMessageSameUser && image && isUserMessage && (
          <CircleImage className="ml-2" img={image} alt="rez" />
        )}
      </div>
    </div>
  );
};

export default ChatRow;
