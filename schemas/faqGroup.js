export default {
  name: 'faqGroup',
  title: 'FAQ Group',
  type: 'object',
  fields: [
    {
      name: 'groupTitle',
      title: 'Group Title',
      type: 'string',
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ title: 'FAQ', type: 'faq' }],
    },
  ],
};
