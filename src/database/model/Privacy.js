import Table from "../Table";

class Privacy extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            id: "0",
            name: "Privé"
          },
          {
            id: "1",
            name: "Publique"
          }
        ]
      })
      .write();
  }
}

export default Privacy;
