import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Business Details')
        .child(
          S.editor().schemaType('businessDetails').documentId('businessDetails')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['businessDetails'].includes(listItem.getId())
      ),
    ]);
