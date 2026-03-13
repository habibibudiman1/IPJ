import { defineType, defineField } from "sanity";

export default defineType({
  name: "clientSegments",
  title: "Client Segments",
  type: "document",
  fields: [
    defineField({
      name: "segments",
      title: "Client Segments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Segment Name",
              type: "string",
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
