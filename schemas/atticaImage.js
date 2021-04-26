export default {
  name: 'attica_image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alternative text',
      description:
        'Add alternative text to describe this image to non sighted users',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
