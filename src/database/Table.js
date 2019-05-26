class Table {
  constructor(dbPath, dbName) {
    const low = require("lowdb");
    const FileSync = require("lowdb/adapters/FileSync");
    const fs = require("fs");

    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(dbPath);
    }

    const adapter = new FileSync(dbPath + dbName + ".json");

    this.dbPath = dbPath;
    this.dbName = dbName;
    this.db = low(adapter);

    this.db.defaults([]).write();

    /*if (!Table.instances) Table.instances = [];
    Table.instances.push(this);*/
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
