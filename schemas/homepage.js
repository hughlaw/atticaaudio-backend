export default {
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      hidden: true,
    },
    {
      name: 'splashImage',
      title: 'Splash Image',
      description: 'The image used behind the main logo on larger screens',
      type: 'image',
    },
    {
      name: 'section1',
      title: 'Section 1',
      type: 'section',
    },
    {
      name: 'dividerImage1',
      title: 'First divider image',
      type: 'attica_image',
    },
    {
      name: 'tour',
      type: 'gallery',
    },
    {
      name: 'equipmentSection',
      title: 'Equipment section',
      type: 'equipmentSection',
    },
    {
      name: 'dividerImage2',
      title: 'Second divider image',
      type: 'attica_image',
    },
    {
      name: 'rates',
      title: 'Rates / Bookings',
      type: 'rates',
    },
    {
      name: 'dividerImage3',
      title: 'Third divider image',
      type: 'attica_image',
    },
  ],
};
