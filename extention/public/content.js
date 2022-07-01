/*global chrome*/
const YOUTUBE_MENU_ID = 'top-level-buttons-computed'

window.addEventListener('load', (event) => {
  const menuContainer = document.getElementById(YOUTUBE_MENU_ID)
  const button = document.createElement('button')
  button.innerText = 'Donaton'
  menuContainer.append(button)
});



const messagesFromReactAppListener = (message, sender, response) => {
  console.log('[content.js]. Message received', {
    message,
    sender,
  })

  if (
    sender.id === chrome.runtime.id &&
    message.from === 'milad' &&
    message.message === 'Hello from React') {
    response('Hello from content.js')
  }

  if (
    sender.id === chrome.runtime.id &&
    message.from === 'milad' &&
    message.message === 'delete logo') {

    const logo = document.getElementById('logo')
    logo.parentElement.removeChild(logo)
  }
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener)