import type { CollectionConfig } from "payload";

export const Merch: CollectionConfig = {
  slug: "merch",
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
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "donation-recommendation",
      type: "number",
      required: true,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "featured",
      type: "checkbox",
      required: true,
      defaultValue: false,
      admin: {
        description: "Featured items will be displayed on the main page",
      },
    },
  ],
};
