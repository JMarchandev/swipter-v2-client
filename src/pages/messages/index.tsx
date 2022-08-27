import { matches, messages } from "../../services/constants";

import ConversationList from "../../components/messages/conversationList";
import Layout from "../../layout";
import MatchVerticalScroller from "../../components/messages/matcheVerticalScroller";

export const Messages = () => {
  return (
    <Layout>
      <h3 className="text-sm text-black-700 ml-3 mt-3">Matches</h3>
      <MatchVerticalScroller matches={matches} />
      <h3 className="text-sm text-black-700 ml-3 mt-3">Messages</h3>
      <ConversationList messages={messages} />
    </Layout>
  );
};

export default Messages;
