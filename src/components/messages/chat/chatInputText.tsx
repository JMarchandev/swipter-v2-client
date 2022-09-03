import { IoMdSend } from "react-icons/io";

export const ChatInputText = () => {

    return (
        <div className="flex items-center absolute mb-16 bottom-0 justify-between w-full p-3">
          <input
            type="text"
            placeholder="Message"
            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            required
          />
          <button type="submit">
            <IoMdSend size="1.8rem" />
          </button>
        </div>
    )
}

export default ChatInputText