"use strict";
import { app, protocol, BrowserWindow, ipcMain } from "electron";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";
const fse = require("fs-extra");

// COMMUNICATION WITH RENDERER PROCESS
import * as db from "./database";
ipcMain.on("get-req", async (event, resource, filters = null) => {
  let resp = [];
  if (typeof resource === "string") {
    resp = await db[resource].get(filters);
  }
  if (typeof resource === "object" && !!resource.from && !!resource.select) {
    // Try to make relational requests here
  }
  event.returnValue = resp;
});

ipcMain.on("move-files", (event, arg) => {
  const profileName = "user1";
  const defaultPath =
    app.getPath("userData") + "\\" + profileName + "\\files\\";
  const pathFromPref = db.user_preferences.db.get("distFolder").value();
  const dstPath = pathFromPref || defaultPath;

  arg.forEach(file => {
    const fullDstPath = dstPath + file.id + "." + file.extension;
    fse
      .move(file.path, fullDstPath, { overwrite: true })
      .then(() => {
        event.reply("files-moved");
      })
      .catch(err => {
        console.log(err);
        event.reply("files-moved");
      });
  });
});
ipcMain.on("save-data", (event, arg) => {
  arg.forEach(file => {
    db["files"].post(file);
  });
  event.reply("data-saved");
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1024,
    height: 800,
    minWidth: 600,
    minHeight: 400,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.maximize();

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
  win.show();

  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
