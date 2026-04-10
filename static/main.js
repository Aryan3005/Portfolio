// static/js/main.js
import { speak, attachMic } from './voice.js';

const inputBox = document.getElementById('inputBox');
const convo = document.getElementById('conversation');

async function sendMessage() {
  const text = inputBox.value.trim();
  if (!text) return;
  // ... your existing addMessage + fetch('/api/rag') ...
  // After receiving data:
  if (document.getElementById('voiceToggle')?.checked !== false) {
    speak(data.response);
  }
}

window.sendMessage = sendMessage;           // so HTML onclick can use it
attachMic('inputBox', () => sendMessage()); // mic → fill input → send
