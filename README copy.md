# LogiTrak Mobile Booking App

> A cross-platform mobile application for LogiTrak’s cargo and passenger booking system.  
> Built with ReactLynx and TypeScript, it lets users request, track, and manage cargo or passenger trips in real time.

---

## 📋 Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Running the App](#running-the-app)
5. [Project Structure](#project-structure)
6. [Available Scripts](#available-scripts)
7. [Contributing](#contributing)
8. [License](#license)
9. [Authors & Contact](#authors--contact)

---

## 🌟 Features

- **Cargo & Passenger Booking**
  - Create new booking requests for cargo shipments or passenger trips in a few taps.
- **Real-time Status & Tracking**
  - See live updates on your booking’s status, route progress, and ETA.
- **Interactive UI**
  - Tap the logo to toggle between the Lynx and React logos—just for fun!
  - Declarative layout primitives: `<view>`, `<text>`, and `<image>`.
- **Lightweight & Performant**
  - Powered by Lynx’s optimized rendering engine for smooth animations and minimal footprint.
- **Extensible Architecture**
  - Easily add new screens, components, and business logic.

---

## 🛠️ Tech Stack

- **Framework**: ReactLynx
- **Language**: TypeScript
- **Styling**: CSS modules (`App.css`)
- **Bundler / CLI**: ReactLynx CLI
- **Package Manager**: Yarn

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **Yarn** package manager
- **ReactLynx CLI** (if your setup requires it)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/logitrak-mobile-booking.git
   cd logitrak-mobile-booking
   ```
2. **Install dependencies**
   ```bash
   yarn install
   ```

---

## ▶️ Running the App

- **Development mode**

  ```bash
  yarn start
  ```

  - Launches the app in your simulator or on a connected device.
  - Supports hot-reload for rapid feedback.

- **Production build** (if supported)
  ```bash
  yarn build
  ```
  - Bundles the app for deployment.

---

## 📂 Project Structure

```
logitrak-mobile-booking/
├── src/
│   ├── App.tsx               # Root component (main entry point)
│   ├── App.css               # Global styles
│   ├── assets/               # Images and static assets
│   │   ├── arrow.png
│   │   ├── logitrak-logo.png
│   │   └── react-logo.png
│   ├── components/           # Reusable UI components
│   └── styles/               # Shared style files (if any)
├── public/                   # Static files served as-is
├── .gitignore
├── package.json
├── tsconfig.json
└── yarn.lock
```

---

## 📝 Available Scripts

In the project directory, you can run:

- **`yarn start`**  
  Launches the app in development mode with hot reloading.

- **`yarn build`**  
  Creates a production build (if your platform supports bundling).

- **`yarn lint`**  
  (Optional) Runs your linter to enforce code style.

- **`yarn test`**  
  (Optional) Runs your test suite (if configured).

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "feat: add awesome feature"
   ```
4. Push to your branch
   ```bash
   git push origin feature/my-awesome-feature
   ```
5. Open a Pull Request

Please follow existing code style (TypeScript, functional components) and include comments for any new logic.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👤 Authors & Contact

- LogiTrak Author: Lloyd Garcia
- Website: www.logitrak.io
- Email: lgarcia@logitrak.io

---
