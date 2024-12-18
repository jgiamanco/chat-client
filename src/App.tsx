import type {
  ChannelFilters,
  ChannelSort,
  ChannelOptions,
  User,
} from "stream-chat";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { EmojiPicker } from "stream-chat-react/emojis";
import "stream-chat-react/dist/css/v2/index.css";

import "./layout.css";

import { init, SearchIndex } from "emoji-mart";
import data from "@emoji-mart/data";

import { CustomMessage } from "./custom-components/CustomMessage";
import { CustomChannelPreview } from "./custom-components/CustomChannelPreview";
import { CustomAttachment } from "./custom-components/CustomAttachment";

// your Stream app information
const apiKey = process.env.REACT_APP_STREAM_API_KEY;
const userId = "jay5myth";
const userName = "Jay";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamF5NW15dGgifQ.iPWu9geoapbHLSYuIpBcz27P2g7vHKvwywbt-GsZfb4";

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const sort: ChannelSort = { last_message_at: -1 };
const filters: ChannelFilters = {
  type: "messaging",
  members: { $in: [userId] },
};
const options: ChannelOptions = {
  limit: 10,
};

init({ data });

const App = () => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client} theme="str-chat__theme-custom">
      <ChannelList
        Preview={CustomChannelPreview}
        filters={filters}
        sort={sort}
        options={options}
      />
      <Channel
        EmojiPicker={EmojiPicker}
        emojiSearchIndex={SearchIndex}
        Attachment={CustomAttachment}
        Message={CustomMessage}
      >
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
