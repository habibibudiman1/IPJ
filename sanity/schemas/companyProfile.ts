import { defineType, defineField } from "sanity";

export default defineType({
  name: "companyProfile",
  title: "Company Profile",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coreSupply",
      title: "Core Supply Focus",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "supportingIngredients",
      title: "Supporting Ingredients",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "qualityStatement",
      title: "Quality Statement",
      type: "text",
    }),
  ],
});
