import { matches, messages } from "../../services/constants";

import ConversationList from "../../components/messages/conversationList";
import Layout from "../../layout";
import MatchVerticalScroller from "../../components/messages/matcheVerticalScroller";
import { useNavigate } from "react-router-dom";

export const Messages = () => {
  let navigate = useNavigate();

  const handleClickMessageRow = (id: number) => {
    navigate("/messages/chat/" + id);
  };
  return (
    <Layout>
      <h3 className="text-sm text-black-700 ml-3 mt-3">Matches</h3>
      <MatchVerticalScroller matches={matches} />
      <h3 className="text-sm text-black-700 ml-3 mt-3">Messages</h3>
      <ConversationList
        messages={messages}
        onClickMessageRow={handleClickMessageRow}
      />
    </Layout>
  );
};

export default Messages;
