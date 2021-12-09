# Automation Tests

## Setup Instructions

This test suite is built using:

* Webdriver.io
* JavaScript
* Mocha

## Requirements
Installing the following libraries are needed to run the automation:

* Node/NPM
* Yarn

## Setup test suite
After installing Node.js and Yarn, navigate to the directory and install using the following command:

```
yarn install
```
## Run Tests
To run the test suite after installing:

```
yarn test:automation
```
## Package Manager

This repo uses Yarn for package management.

This project uses a simple setup for a wdio test suite using the page object model. There is a page object for the main page and a parent page (page.js) object that contains all important selectors and methods each page object should inherit from.

The code is written using JavaScript and Webdriverio.

About WDIO - https://webdriver.io/docs/what-is-webdriverio
