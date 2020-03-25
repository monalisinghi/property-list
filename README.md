# Available Scripts

In the project directory, you can run:

## `yarn start`
Runs the app in the development mode. I am using parcel to compile the code and run a development server.
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

## `yarn build`
Builds the app for production to the `dist` folder.<br />

## `yarn test`
I used [Jest](https://jestjs.io/) to test the code. I have created unit tests for add, remove and 
create property functionality.

## `yarn coverage`
Run this task to get Code coverage report.

# Solution approach
I have used modular approach and broken down the code in separate files based on functionality. 
This approach helps with unit testing and code maintainability based on [KISS principle](https://en.wikipedia.org/wiki/KISS_principle). 

#Styling
I have written basic styling for this test, for bigger applications we can use write comprehensive 
styling using SCSS and applying BEM, SMACSS or other popular css methodologies.