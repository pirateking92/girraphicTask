# Girraphic Marathon Parser

A simple webapp written with Typescript and Nextjs, that parses JSON data into an easily readable format that can be sorted by athlete rank, and athlete bib number.
The resulting order can then be exported as a CSV file.

## Table of Contents

- [Girraphic Marathon Parser](#girraphic-marathon-parser)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Tests](#tests)
  - [Design Choices](#design-choices)

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

### Backend

from the girraphicTask folder:

`cd backend`

`npx ts-node src/index.ts`

The backend server should then be running on 'port 4000'

### Frontend

`cd frontend`

`npm run build && npm run start`

Navigate to 'localhost:3000' in your preferred browser and you will be able to interact with the program :)

## Tests

If you would like to run the tests, navigate to either the backend or the frontend with

`cd backend`

`cd frontend`

from the main _girraphicTask_ folder, and then run

`npm test`

to run jest and the tests

## Design Choices

I decided to use Typescript because I had been learning it for the past few weeks and wanted to further develop my knowledge, as well as showcase what I had already learned. I chose Nextjs as this is what mentors and some other software devs had suggested to me when I told them that I was designing my own portfolio website.

My previous experience has been with Go and Python and I felt that this task would have worked better with Typescript and a React framework, so decided not to use either.

I split the project into a backend and frontend mostly due to thoughts of a future scalability, where users could be involved and so data and secrets would need to be hidden away, and also for some possible database storage. This was a stretch goal, and I feel that I could have spent more time on the styling, particularly the Flowbite components, but overall I'm satisfied with having made the split of the front and backend.

If I had more time, I would have liked to improve the styling by making the table have changes in shading when hovered over, and to change the buttons to icons with tooltips rather than with words and tooltips.

I also would have added more tests for failing scenarios, adding in mock instances and results, so as to have more robust testing. This would have perhaps been more meaningful for devs that would look at the code in the future, which also raises that I would change the error messages to be more meaningful to the user.
