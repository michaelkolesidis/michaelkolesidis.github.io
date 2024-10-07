// https://michaelkolesidis.com
// Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { WindowManager, dragElement } from 'dom-window-manager';

let windowManager = new WindowManager();

export default function header() {
  const header = document.getElementById('header');

  if (header != null) {
    // Name
    const name = document.createElement('div');
    name.setAttribute('id', 'name');
    name.innerHTML = /* html */ `MICHAEL K<span id="title-letter">O</span>LESIDIS`;
    header.appendChild(name);

    const smiley = document.createElement('div');
    smiley.setAttribute('id', 'smiley');
    smiley.innerHTML = `<img alt=Smiley" src="../../assets/smiley.svg" />`;
    header.appendChild(smiley);

    smiley.addEventListener('click', () => {
      smiley.classList.add('move-left');
      setTimeout(() => {
        smiley.classList.remove('move-left');
      }, 2000);
    });

    // Top gap
    const topGap = document.createElement('div');
    topGap.setAttribute('id', 'top-gap');
    topGap.innerHTML = `.`;
    header.appendChild(topGap);

    /* Styling */
    topGap.style.color = `white`;

    // Message Box
    const messageBox = document.createElement('div');
    messageBox.setAttribute('id', 'box');

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = /* html */ `
        <p>DESIGN AWARD</p>
        <p>One Page Love</p>
        <p>February 2024</p>`;
    messageBox.appendChild(content);

    dragElement(messageBox);
    messageBox.style.zIndex = windowManager.base;
    messageBox.addEventListener('mousedown', () => {
      messageBox.style.zIndex = windowManager.moveOnTop();
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = '✕';
    removeButton.addEventListener('click', () => {
      messageBox.style.opacity = '0';
      header.removeChild(messageBox);
    });
    messageBox.appendChild(removeButton);
    header.appendChild(messageBox);

    // Sticker
    const sticker = document.createElement('div');
    sticker.setAttribute('id', 'new');
    sticker.innerHTML = `<img alt="New! sticker" src="../../assets/new.svg" />`;
    header.appendChild(sticker);

    dragElement(sticker);
    sticker.style.zIndex = windowManager.base;

    sticker.addEventListener('mousedown', () => {
      sticker.style.zIndex = windowManager.moveOnTop();
    });

    // Welcome
    const welcome = document.createElement('div');
    welcome.setAttribute('id', 'welcome');
    welcome.innerHTML = `<img alt="Welcome sign" src="../../assets/welcome.gif" />`;
    header.appendChild(welcome);

    dragElement(welcome);
    welcome.style.zIndex = windowManager.base;

    welcome.addEventListener('mousedown', () => {
      welcome.style.zIndex = windowManager.moveOnTop();
    });
  }
}
