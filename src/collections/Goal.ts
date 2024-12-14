import type { CollectionConfig } from "payload";

export const Goal: CollectionConfig = {
  slug: "goal",
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
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "weight",
      type: "number",
      required: true,
    },
  ],
};
