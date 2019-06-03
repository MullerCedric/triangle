class Table {
  constructor(dbPath, dbName) {
    this.low = require("lowdb");
    const FileSync = require("lowdb/adapters/FileSync");
    const fs = require("fs");

    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(dbPath);
    }

    const adapter = new FileSync(dbPath + dbName + ".json");

    this.dbPath = dbPath;
    this.dbName = dbName;
    this.db = this.low(adapter);

    this.setDefaults();

    /*if (!Table.instances) Table.instances = [];
    Table.instances.push(this);*/
  }
  setDefaults() {
    this.db.defaults({ data: [] }).write();
  }

  async get(filters = null) {
    if (!filters) return this.db.get("data").value();

    return this.db
      .get("data")
      .filter(filters)
      .value();
  }

  /*
  hasOne(foreignDbInstance, foreign_key = null, local_key = null) {
    console.log(foreignDbInstance, foreign_key, local_key);
  }

  belongsTo(foreignDbInstance, foreign_key = null, local_key = null) {
    console.log(foreignDbInstance, foreign_key, local_key);
  }

  hasMany(foreignDbInstance, foreign_key = null, local_key = null) {
    console.log(foreignDbInstance, foreign_key, local_key);
  }

  belongsToMany(foreignDbInstance, foreign_key = null, local_key = null) {
    console.log(foreignDbInstance, foreign_key, local_key);
  }*/
}

export default Table;
