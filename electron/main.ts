import { app, BrowserWindow } from 'electron'
import { menubar } from 'menubar'
import path from 'node:path'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

const mb = menubar({
  icon: path.join(__dirname, '..', 'src', 'assets', 'IconTemplate.png'),
  index: VITE_DEV_SERVER_URL,
  browserWindow: { width: 400, height: 600, alwaysOnTop: true },
  showOnAllWorkspaces: false,
})

mb.on('ready', () => {
  console.log('app is ready')

  mb.on('show', () => {
    console.log('app was opened')
    // mb.window && mb.window.reload()
  })

  mb.on('hide', () => {
    console.log('app was hidden')
    mb.window && mb.window.close()
  })
})

mb.on('after-create-window', () => {
  mb.window.openDevTools()
})

app.on('window-all-closed', () => {
  win = null
})

// app.whenReady().then(createWindow);
