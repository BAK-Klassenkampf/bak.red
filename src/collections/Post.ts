import type { CollectionConfig } from "payload";

export const Post: CollectionConfig = {
  slug: "post",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: false,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "author",
      required: false,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "text",
      type: "richText",
      required: true,
    },
  ],
};
