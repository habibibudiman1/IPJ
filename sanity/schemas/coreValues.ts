import { defineType, defineField } from "sanity";

export default defineType({
  name: "coreValues",
  title: "Core Values",
  type: "document",
  fields: [
    defineField({
      name: "values",
      title: "Values",
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
              description: "Lucide icon name (e.g., Award, Shield)",
            },
          ],
        },
      ],
    }),
  ],
});
