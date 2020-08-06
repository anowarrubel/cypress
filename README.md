# cypress test framework 
This is a automation test framework buil with cypress. Details: https://www.cypress.io/

## How to install Cypress using npm?
1. Create a project folder
2. cd /your/project/folder
3. Run "npm init" and follow the screen prompt to create package.json 
3. Run "npm install cypress --save-dev"

## Optional: 

Install Mocha 
1. cd /your/project/folder
2. Run "npm install mocha --save-dev"

Install cypress-multi-reporter 
1. cd /your/project/folder
2. Run "npm install cypress-multi-reporters --save-dev"

Install Mochawesome for html reporting
1. cd /your/project/folder
2. Run "npm install --save-dev mochawesome"

Install Mochawesome-merge 
1. cd /your/project/folder
2. Run "npm install mochawesome-merge --save-dev"

Install Mochawesome-report-generator 
1. cd /your/project/folder
2. Run "npm install mochawesome-report-generator --save-dev"

## How to Open Cypress?

1. cd /your/project/folder 
2. Run "./node_modules/.bin/cypress open"
3. Or run "npx cypress open" (If you have npm >v5.2)


## How to run tests?
1. cd to root folder
2. To run a particular test, run "npx cypress run --spec 'cypress/integration/test_name.spec.js' "
3. To run all tests in a folder, run "npx cypress run --spec 'cypress/integration/**.spec.js' "
4. To run a test with headless browser, run "./node_modules/.bin/cypress run --headless --spec "cypress/integration/test_name.spec.js" (it will use default headless elctron browser)
5. To run a test with chrome headles browser, run "./node_modules/.bin/cypress run -b chrome --headless --spec 'cypress/integration/**.spec.js' "
6. To upload test result to the Cypress Dashboard, run "./node_modules/.bin/cypress run --spec 'cypress/integration/home.spec.js'  --record --key ab5bc05f-ceaf-4bb6-ab4d-af30c08950ee"

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

