# Girraphic Marathon Parser

A simple webapp that parses JSON data into an easily read format that can be sorted by athlete rank, and athlete bib number.
The resulting order can then be exported as a CSV file.

## Table of Contents

  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

Make sure that the following are installed for this project:

- **Node.js and npm**
- Visit the official Node.js website (https://nodejs.org) and download the latest LTS (Long Term Support) version for your operating system.
- Once downloaded, run the installer and follow the on-screen instructions to complete the installation.
- After installation, you can verify that Node.js and npm are installed by running `node -v` and `npm -v` in your terminal or command prompt.

- **Next.js**
- Install Next.js by running the following command in your terminal or command prompt: `npm install next react react-dom`

- **Express**
- Install Express by running the following command in your terminal or command prompt: `npm install express`

- **Tailwind CSS (for styling)**
- `npm install -D tailwindcss`

- **Flowbite (for component styling)**
- Install Flowbite by running the following command: `npm install flowbite`

- **Jest (for testing)**
- Install Jest by running the following command: `npm install --save-dev jest`

- **TypeScript**
- Install TypeScript by running the following command: `npm install --save-dev typescript`

## Usage

With all the above installed, follow these commands in your terminal to run the project:
**Backend**
from the girraphicTask folder:
`cd backend`
`npx ts-node-dev src/index.ts`

The backend server should then be running on 'port 4000'

**Frontend**
`cd frontend`
`npm run build && start`

Navigate to 'localhost:3000' in your preferred browser and you will be able to interact with the program :)
