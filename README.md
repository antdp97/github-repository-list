# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Owner's Words

## Description

The Project using 2 APIs from GitHub API, fetching repositories using *organization name* and *username* separately. The Project is using Material UI as UI library, axios, react-testing-library - jest for testing.

There are 2 Material UI TextField for inputting *organization name* and *username*. After entering the keyword for one of the input field user can press "Enter" button to perform the searching function. After fetching some data from the server there will be some items got rendered on a list.

##Things I have done:

* Search Functions for both *username* and *organization name*
* An Autocomplete for choosing sort orders which contains: Most Stars, Most Popular, Most Popular Unforked Repositories, Most Forks (sort by _fork_count_) and Most Open Issues(sort by _open_issues_count_).
* Render a list of GitHub Repositories name, the description of the repo and language with the stars count.
* I'm trying to make some unit test with jest but could not find a way to mock the api call.

##Things I want to improve:

* Improving the UI - The design is very messy and there are still more stuffs to add to make it looks better.
* Adding a virtual scroll or something... I'm still trying to investigate on it.
* Add more sort options.
* The useContext with useReducer part is kinda new to me when I tried to implement it together, so I believe there are still more ways to improve it.
* Add some view details features for each item ( maybe a link to redirect at the original repository)
* Separating the fetching api functions into a different service.js file.

Due to some health issues, I could not perform my best, but I want to express my gratitude to dwarves team for providing me this opportunity to practice my skill and experience new things. Thanks.
