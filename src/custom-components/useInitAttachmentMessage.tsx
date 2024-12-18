import { useEffect } from "react";
import type { ChannelFilters, ChannelSort, StreamChat } from "stream-chat";
import { attachments } from "../test-data/attachmentData";

export const useInitAttachmentMessage = ({
  filters,
  sort,
  client,
}: {
  client: StreamChat;
  filters: ChannelFilters;
  sort: ChannelSort;
}) => {
  useEffect(() => {
    if (!client) return;

    const initAttachmentMessage = async () => {
      const [channel] = await client.queryChannels(filters, sort);

      await channel.sendMessage({
        text: "Your selected product is out of stock, would you like to select one of these alternatives?",
        attachments,
      });
    };

    initAttachmentMessage().catch((error) => {
      console.error(`Failed to initialize attachments`, error);
    });
  }, [client, filters, sort]);
};
