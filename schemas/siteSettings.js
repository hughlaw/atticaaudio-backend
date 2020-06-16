export default {
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },
  ],
};
