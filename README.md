# algofy-technical-task
This repository was created as part of the Algofy technical assessment. The program consist on a simple Express.js app to serve static assets and display content dinamically using the Liquid templating language.

**This project was deployed on Render. You can view it [here](https://algofy-technical-test.onrender.com/).**

## Project structure
- server.js - Entry point
- public
  - img
  - css
  - js - For added functionality, like the mobile nav.
- views
  - index.liquid - Main template file, displays most of the site except "projects", which is rendered conditionally.
  - partials
      - projects.liquid - Loops over projectData.json and displays a project card for each item.
- projectData.json - Data file.

## How to run locally
1. First, clone the repo.
```
git clone https://github.com/daniportela/algofy-technical-task.git
```
2. `cd` into directory.
```
cd algofy-technical-task
```
3. Install dependencies
```
npm install
```
4. Spin up the server.
```
node server
```
5. Finally, in your desired browser, go to http://localhost:5000. The app should be running.