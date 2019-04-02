# Giphy Buddy React/Redux

Giphy Buddy project app with React/Redux.

<https://playgroundreact.firebaseapp.com/>

## Requirements

Install the following.

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* [HomeBrew](https://brew.sh/)

```shell
brew install yarn
```
* [Yarn >= 1.3.2](https://yarnpkg.com)

## Setup

From the app's root directory, install the app's Node package dependencies.

```shell
yarn install
```

Navigate to https://console.firebase.google.com
Initialize a new Firebase project and populate your Firebase project configuration in ./src/actions/index.js
Use the keys they give you when setting up a new project.

```shell
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: ""
};
```

In your Firebase console for your new project, navigate to Authentication and "Set up Sign-in Method". Click Email/Password & set the first option to enabled & press save.
Next find Database in the side menu, scroll down to Create Database under Realtime Database. Start in test mode => Enable.

## Development server

Run `yarn start` from the app's root directory for a development server.

Navigate to `http://localhost:3000/`. The app will automatically reload if you
change and save any of the source files.
