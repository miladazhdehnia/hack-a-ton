/*global chrome*/
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const App =  () => {
  const [url, setUrl] = useState('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = {active: true, lastFocusedWindow: true};
    console.log(chrome)
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;

      setUrl(url);
    });
  }, []);

  const sendRemoveMessage = () => {
    const message = {
      from: 'milad',
      message: "delete logo",
    }

    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const currentTabId = tabs[0].id;
      chrome.tabs.sendMessage(
        currentTabId,
        message,
        (response) => {
          console.log({ response })

        });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo}/>
        <p>URL:</p>
        {url}
        <p>
        </p>
        <button onClick={sendRemoveMessage}>Remove logo</button>
      </header>
    </div>
  );
};