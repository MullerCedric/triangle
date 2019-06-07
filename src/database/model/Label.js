import Table from "../Table";

class Label extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            id: "0",
            name: "Auteur"
          },
          {
            id: "1",
            name: "Genre"
          }
        ]
      })
      .write();
  }
}

export default Label;
