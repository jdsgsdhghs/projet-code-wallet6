import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  sendFragment: (fragment) => ipcRenderer.send('add-fragment', fragment),
  getFragments: () => ipcRenderer.invoke('get-fragments'),
  deleteFragment: (id) => ipcRenderer.send('delete-fragment', id),
  editFragment: (fragment) => ipcRenderer.send('edit-fragment', fragment),
  // Ajout pour les tags :
  editTag: (oldName, newName) => ipcRenderer.send('edit-tag', { oldName, newName }),
  deleteTag: (name) => ipcRenderer.send('delete-tag', name),
  importFragments: (fragments) => ipcRenderer.send('import-fragments', fragments),
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
