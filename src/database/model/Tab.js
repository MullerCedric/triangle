import Table from "../Table";

class Tab extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            id: "0",
            zone: "left",
            machine_name: "Shortcuts",
            name: "Raccourcis"
          },
          {
            id: "1",
            zone: "left",
            machine_name: "About",
            name: "À propos"
          }
        ]
      })
      .write();
  }
}

export default Tab;
