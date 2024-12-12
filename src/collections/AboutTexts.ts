import type { CollectionConfig } from "payload";

export const AboutTexts: CollectionConfig = {
  slug: "about-texts",
  admin: {
    useAsTitle: "heading",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "weight",
      type: "number",
      admin: {
        description: "The higher the weight, the later it will be displayed",
      },
      required: true,
    },
  ],
};
