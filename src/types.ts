import type { DefaultGenerics, LiteralStringForUnion, UR } from "stream-chat";

export type AttachmentType = Record<string, unknown>;
export type ChannelType = { demo?: string };
export type CommandType = LiteralStringForUnion;
export type EventType = Record<string, unknown>;
export type MemberType = UR;
export type MessageType = Record<string, unknown>;
export type ReactionType = Record<string, unknown>;
export type UserType = { image?: string };

export type StreamChatGenerics = {
  attachmentType: AttachmentType;
  channelType: ChannelType;
  commandType: CommandType;
  eventType: EventType;
  memberType: MemberType;
  messageType: MessageType;
  reactionType: ReactionType;
  userType: UserType;
} & DefaultGenerics;
