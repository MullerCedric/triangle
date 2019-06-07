import Table from "../Table";

class ContentTypeLabel extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            content_type_id: "0",
            label_id: "0"
          },
          {
            content_type_id: "0",
            label_id: "1"
          },
          {
            content_type_id: "1",
            label_id: "0"
          }
        ]
      })
      .write();
  }
}

export default ContentTypeLabel;
