
# PasteApp

PasteApp is a modern web application built with React and Vite, designed for creating, sharing, and viewing text pastes easily. It features a clean UI, fast performance, and a simple workflow for managing your pastes.

## Features
- Create new pastes with a title and content
- View a list of all pastes
- View individual paste details
- Responsive design
- State management with Redux
- Fast development with Vite

## Tech Stack
- React
- Vite
- Redux (with Redux Toolkit)
- CSS (with PostCSS)

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/gaurishankar-g/PasteApp.git
	cd paste-app
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Start the development server:
	```bash
	npm run dev
	# or
	yarn dev
	```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
paste-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── store.js
│   ├── assets/
│   ├── Components/
│   │   ├── Home.jsx
│   │   ├── NavBar.jsx
│   │   ├── Pastes.jsx
│   │   ├── ViewPaste.jsx
│   └── Redux/
│       └── pasteSlice.js
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.mjs
├── eslint.config.js
└── README.md
```

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.
