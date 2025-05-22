
import { LowSync } from 'lowdb';
import { JSONFileSync } from '../../node_modules/lowdb/lib/adapters/node/JSONFile';import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
const path = require('path');
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// base de donnees fragments.json
const dbPath = path.join(app.getPath('userData'), 'fragments.json');
console.log(" DB PATH utilisé :", dbPath);

const adapter = new JSONFileSync(dbPath);
const db = new LowSync(adapter, {});
db.read();
db.data ||= { fragments: [] };
db.write();

console.log(path.join(__dirname, '../preload/index.js'));

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle('get-fragments', () => {
    db.read();
    return db.data.fragments;
  });

  // Canal IPC pour ajouter un fragment
  ipcMain.on('add-fragment', (event, fragment) => {

    console.log("Fragment reçu :", fragment);
    
    db.read();
    db.data.fragments.push({
      id: Date.now(),
      ...fragment,
    });
    db.write();
  });
  ipcMain.on('delete-fragment', (event, id) => {
    db.read(); // Recharge la base
    db.data.fragments = db.data.fragments.filter(fragment => fragment.id !== id); // Supprime
    db.write(); // Sauvegarde
  });
  ipcMain.on('edit-fragment', (event, fragment) => {
    db.read();
    const index = db.data.fragments.findIndex(frag => frag.id === fragment.id);
    if (index !== -1) {
      db.data.fragments[index] = fragment;
      db.write();
    }
  });
  // Mettre à jour un tag dans tous les fragments
ipcMain.on('edit-tag', (event, { oldName, newName }) => {
  db.read();
  db.data.fragments = db.data.fragments.map(fragment => {
    return {
      ...fragment,
      tags: fragment.tags.map(tag => tag === oldName ? newName : tag)
    };
  });
  db.write();
});

// Supprimer un tag de tous les fragments
ipcMain.on('delete-tag', (event, tagToDelete) => {
  db.read();
  db.data.fragments = db.data.fragments.map(fragment => {
    return {
      ...fragment,
      tags: fragment.tags.filter(tag => tag !== tagToDelete)
    };
  });
  db.write();
});
ipcMain.on('import-fragments', (event, fragments) => {
  db.read();
  db.data.fragments = fragments;
  db.write();
});

  
  

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
