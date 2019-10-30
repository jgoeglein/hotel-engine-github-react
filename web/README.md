This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
You will need to `npm start` in the `../server/` directory as well in order to retrieve results.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Test Results

File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |    65.96 |     37.5 |    68.42 |    65.22 |                   |
 src              |     37.5 |       10 |    28.57 |     37.5 |                   |
  App.js          |    42.86 |     12.5 |    28.57 |    42.86 |... 62,63,64,65,67 |
  index.js        |        0 |        0 |      100 |        0 |             6,8,9 |
 src/components   |    95.65 |    83.33 |    91.67 |    95.45 |                   |
  Loading.js      |      100 |      100 |      100 |      100 |                   |
  SearchBar.js    |     87.5 |      100 |       75 |     87.5 |                17 |
  SearchResult.js |      100 |      100 |      100 |      100 |                   |
  SortBy.js       |      100 |       75 |      100 |      100 |                25 |

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.