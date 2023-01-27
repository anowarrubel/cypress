# cypress test framework 
This is a automation test framework buil with cypress. Details: https://www.cypress.io/

## How to install Cypress using npm?
1. Checkout this codebase from a repo
2. cd into the repo to cypress folder
3. Run "npm install"


## How to Open Cypress?

1. Go to cypress folder
2. Run "npx cypress open"
3. Select "End to End" testing
4. Click on a test to execute


## How to run tests using the command line?
1. cd to cypress folder
2. To run a particular test, run "npx cypress run --spec 'cypress/integration/test_name.spec.js' "
3. To run all tests in a folder, run "npx cypress run --spec 'cypress/integration/**.spec.js' "
4. To run a test with headless browser, run "./node_modules/.bin/cypress run --headless --spec "cypress/integration/test_name.spec.js" (it will use default headless elctron browser)
5. To run a test with chrome headles browser, run "./node_modules/.bin/cypress run -b chrome --headless --spec 'cypress/integration/**.spec.js' "
6. To upload test result to the Cypress Dashboard, run "./node_modules/.bin/cypress run --spec 'cypress/integration/home.spec.js'  --record --key ab5bc05f-ceaf-4bb6-ab4d-af30c08950ee"

## CI/CD integration/Regression testing: Run these commands from the terminal command line or CI/CD command
1. To run tests on dev, run "npm run test:dev" 
2. To run tests on stage, run "npm run test:stage"
3. To run tests on prod, run "npm run test:prod"

## Where to create tests?
Tests are created inside "specs" folder: "/root_folder/cypress/integration/specs"

## Where is the page object folder
Page object files are created inside "pages" folder: "/root_folder/cypress/integration/pages"

## How do I save baseUrl ?
baseUrl variable for a env url is saved in the cypress.json file located "/root_folder/cypress/cypress.json"

## Where do I save resuable code that other tests can reuse?
Resuable code is saved inside commands.js file located under "/root_folder/cypress/support/commands.json"

## Where can I save my data file so my tests can use that for test data?
Test data can be saved under "fixtures" folder located under "/root_folder/cypress/support/commands.json"

## Where screenshots are saved?
cypress takes screenshot for failed tests. Screenshots are saved under "screenshots" folder located "/root_folder/cypress/
screenshots"

## Where videos are saved?
cypress takes videos for tests executed with headless browser or using command line. Videos are saved under "videos" folder located "/root_folder/cypress/videos"

