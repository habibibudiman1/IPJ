import { defineType, defineField } from "sanity";

export default defineType({
  name: "advantages",
  title: "Our Advantages",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Advantage Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Lucide icon name",
            },
          ],
        },
      ],
    }),
  ],
});
