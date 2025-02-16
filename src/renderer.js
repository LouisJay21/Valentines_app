/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */import './index.css';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const gifContainer = document.getElementById('gifContainer');
const gif = document.getElementById('gif');
const sound = document.getElementById('sound');
const heartContainer = document.getElementById("heart-container");
const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];

yesButton.addEventListener('click', () => {
  gif.src = 'assets/images/happy.gif';
  sound.src = 'assets/music/happy.mp3';
  gifContainer.style.display = 'block';
  sound.play();
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.transition = "background 1s ease-in-out";
  document.body.style.backgroundImage = "url('assets/images/background.png')";
});
const heartImagePath = 'assets/images/heart.png'; 
function createFlyingHearts(x, y) {
  for (let i = 0; i < 5; i++) {
    let heart = document.createElement("img");
    heart.src = heartImagePath; // Resolves the heart image path
    heart.classList.add("heart");

    // Ensure hearts are absolutely positioned relative to the container
    heart.style.position = "absolute";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.width = "30px"; // Adjust size as needed
    heart.style.pointerEvents = "none"; // So it doesn't interfere with clicks

    heartContainer.appendChild(heart); // Append to #heart-container instead of body

    setTimeout(() => {
      heart.style.transform = `translateY(-150px) scale(0.5)`;
      heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}


// Event listener to generate hearts when hovering over Yes button
yesButton.addEventListener("mouseover", function (event) {
  createFlyingHearts(event.clientX, event.clientY);
});


document.addEventListener("DOMContentLoaded", () => {
  yesButton.addEventListener("click", () => {
    sound.play();
    sound.loop = true;
  });
});

noButton.addEventListener("mouseover", () => {
  const randomX = (Math.random() * 300 - 150).toFixed();
  const randomY = (Math.random() * 300 - 150).toFixed();

  noButton.style.transition = "transform 0.5s ease-in-out"; // Smooth movement
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

function shiftNoButton() {
  const currentPosition = positions.find(pos => noButton.classList.contains(pos));
  const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];

  noButton.classList.remove(currentPosition);
  noButton.classList.add(nextPosition);
}

noButton.addEventListener('click', shiftNoButton);
