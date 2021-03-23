if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker Registered', registration)
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
}

import { Home, Detail, Profile } from './pages/index.js'
import { Div, Text } from './utils/components/index.js'
import { LocalStorageSetup } from './utils/storage/localStorage.js'

const checkInternetStatus = () => {
  if (window.navigator.onLine != true) {
    const body = document.querySelector('body')
    const div = Div('internetPopup')
    const text = Text('No internet connection')
    body.appendChild(div)
    div.appendChild(text)
  }
}

const init = () => {
  // Insert local Storage
  LocalStorageSetup()
  checkInternetStatus()
  if (window.location.pathname === '/') {
    Home()
  } else if (window.location.pathname === '/profile') {
    Profile()
  } else if (window.location.pathname.includes('/image/')) {
    Detail()
  } else {
    // console.log('other')
  }
}

init()
