import { Attachment, type AttachmentProps } from "stream-chat-react";

export type CustomAttachmentType = {
  image: string;
  name: string;
  type: string;
  url: string;
};

export const CustomAttachment = (props: AttachmentProps) => {
  const { attachments } = props;
  const [attachment] = (attachments || []) as CustomAttachmentType[];
  if (attachment?.type === "product") {
    return (
      <div>
        <a href={attachment.url} rel="noreferrer">
          <img alt="custom-attachment" height="100px" src={attachment.image} />
          <br />
          {attachment.name}
        </a>
      </div>
    );
  }

  return <Attachment {...props} />;
};
