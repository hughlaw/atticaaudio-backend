export default {
  name: 'bio',
  title: 'Biography',
  type: 'object',
  fields: [
    {
      name: 'enableSection',
      title: 'Show this section',
      type: 'boolean',
    },
    {
      name: 'sectionTitle',
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Some awesome information about yourself',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'bioImage',
      title: 'Headshot/Bio image',
      type: 'attica_image',
    },
  ],
};
