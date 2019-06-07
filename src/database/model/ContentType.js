import Table from "../Table";

class ContentType extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            id: "0",
            name: "Audio"
          },
          {
            id: "1",
            name: "Vidéo"
          },
          {
            id: "2",
            name: "Photo"
          }
        ]
      })
      .write();
  }
}

export default ContentType;
