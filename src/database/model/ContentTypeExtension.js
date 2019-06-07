import Table from "../Table";

class ContentTypeExtension extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            content_type_id: "0",
            extension_id: "0"
          },
          {
            content_type_id: "0",
            extension_id: "1"
          },
          {
            content_type_id: "1",
            extension_id: "1"
          },
          {
            content_type_id: "1",
            extension_id: "2"
          },
          {
            content_type_id: "1",
            extension_id: "3"
          },
          {
            content_type_id: "2",
            extension_id: "4"
          },
          {
            content_type_id: "2",
            extension_id: "5"
          },
          {
            content_type_id: "2",
            extension_id: "6"
          }
        ]
      })
      .write();
  }
}

export default ContentTypeExtension;
