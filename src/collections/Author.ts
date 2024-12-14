import type { CollectionConfig } from "payload";

export const Author: CollectionConfig = {
  slug: "author",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "bio",
      type: "richText",
      required: false,
    },
  ],
};
