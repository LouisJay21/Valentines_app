Valentine's Invitation App

A simple Valentine's invitation desktop app built with Electron.js. The app includes interactive buttons, animations, custom fonts, and a playful experience where the "No" button moves when hovered.

Features

Custom UI: Beautifully designed interface with custom fonts and images.

Playful Interaction: The "No" button moves when hovered, making it fun and engaging.

Animated Effects: Hearts floating, bouncing elements, and smooth transitions.

Custom Sounds & GIFs: The "Yes" button triggers a cute GIF and a sound effect.

Electron Packaging: Can be packaged into an executable for distribution.

Installation

Prerequisites

Node.js (Ensure it's installed)

Electron.js

Steps

Clone this repository:

git clone https://github.com/yourusername/valentine-invitation.git
cd valentine-invitation

Install dependencies:

npm install

Run the app:

npm start

Packaging the App

To distribute your app as an executable:
a
Install Electron Packager:

npm install -g electron-packager

Run the packaging command:

electron-packager . "ValentineInvite" --platform=win32 --arch=x64 --icon=assets/icon/icon.ico --out=dist --overwrite

Replace win32 with darwin for macOS or linux for Linux.

Ensure icon.ico exists in the correct path.

The packaged app will be inside the dist/ folder.

Changing the App Icon

To change the desktop, toolbar, and menu bar icons:

Update the main.js file:

const appIcon = nativeImage.createFromPath(path.join(__dirname, 'assets/icons/icon.png'));
mainWindow.setIcon(appIcon);

Ensure the icon file is in assets/icons/icon.png.

For Windows installers, use an .ico file instead.

File Structure

valentine-invitation/
│── assets/
│   ├── fonts/
│   ├── images/
│   ├── icons/
│── src/
│   ├── main.js
│   ├── preload.js
│   ├── index.html
│   ├── renderer.js
│── package.json
│── README.md

Credits

UI/Design: [Your Name]

Built with: Electron.js

License

# Valentines_app