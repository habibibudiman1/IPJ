import { defineType, defineField } from "sanity";

export default defineType({
  name: "visionMission",
  title: "Vision & Mission",
  type: "document",
  fields: [
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "missions",
      title: "Missions",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
