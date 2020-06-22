export default {
  name: 'accommodation',
  title: 'Accommodation',
  description: 'Adds information about the accommodation and an image gallery',
  type: 'object',
  fields: [
    {
      name: 'enableSection',
      title: 'Show this section',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'introText',
      title: 'Intro text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'galleryImages',
      title: 'Gallery images',
      type: 'array',
      of: [{ type: 'attica_image' }],
    },
  ],
};
