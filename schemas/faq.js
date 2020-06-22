export default {
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'quesiton',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};
