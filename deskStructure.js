import { TiHome, TiSpanner } from 'react-icons/ti';

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(TiHome)
        .child(
          S.editor()
            .title('Homepage')
            .schemaType('homepage')
            .documentId('ac499f08-b6ee-49b7-a79c-dac3a4f404cc')
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(TiSpanner)
        .child(
          S.editor()
            .title('Site settings')
            .schemaType('siteSettings')
            .documentId('92c9a62e-b66d-4d73-ab59-277a8b12739d')
        ),
      ...S.documentTypeListItems().filter((listItem) => {
        return !['homepage', 'siteSettings'].includes(listItem.getId());
      }),
    ]);
