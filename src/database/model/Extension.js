import Table from "../Table";

class Extension extends Table {
  constructor(dbPath, dbName) {
    super(dbPath, dbName);
  }

  setDefaults() {
    this.db
      .defaults({
        data: [
          {
            id: "0",
            value: "mp3",
            player: "audio"
          },
          {
            id: "1",
            value: "mp4",
            player: "video"
          },
          {
            id: "2",
            value: "avi",
            player: "video"
          },
          {
            id: "3",
            value: "mpeg",
            player: "video"
          },
          {
            id: "4",
            value: "jpg",
            player: "none"
          },
          {
            id: "5",
            value: "png",
            player: "none"
          },
          {
            id: "6",
            value: "gif",
            player: "none"
          }
        ]
      })
      .write();
  }
}

export default Extension;
