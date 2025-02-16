# 💖 Valentine's Invitation App

This is a simple desktop application built with Electron.js to create an interactive Valentine's invitation. The app features animated hearts, a bouncing cat, and playful Yes/No buttons.

## 🚀 Features
- Animated hearts floating on Yes button hover
- "No" button moves away when hovered
- Custom fonts and styles
- GIF and sound play when "Yes" is clicked
- Custom application icon
- Packaged for distribution

## 📂 Project Structure
```
📦 valentine-invitation-app
 ┣ 📂 assets
 ┃ ┣ 📂 fonts
 ┃ ┣ 📂 images
 ┃ ┣ 📂 icons
 ┣ 📂 src
 ┃ ┣ 📜 main.js
 ┃ ┣ 📜 preload.js
 ┃ ┣ 📜 renderer.js
 ┣ 📂 renderer
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 index.css
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┣ 📜 README.md
```

## 🛠 Installation & Setup

### Prerequisites
Make sure you have **Node.js** and **npm** installed.

### Install Dependencies
```sh
npm install
```

### Run the App
```sh
npm start
```

## 🏗 Packaging the App
To package the Electron app for distribution:

```sh
npm run make
```

This will generate platform-specific binaries inside the `out` folder.

## 🖼 Changing the App Icon
Icons are stored inside `assets/icons/`. Modify the icon path in `main.js`:
```js
const appIcon = nativeImage.createFromPath(path.join(__dirname, 'assets/icons/icon.png'));
mainWindow.setIcon(appIcon);
```

## 🐞 Troubleshooting
- **App closes immediately on `npm start`**
  - Ensure your `main.js` has correct file paths.
  - Check the console for errors.
  - Run `electron .` directly.

## 📜 License
This project is open-source and free to use for personal projects.

💘 Happy coding! 🎉
