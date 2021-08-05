# Template for firebase project

> setup projects in `firebase.json` and then run `yarn dev:start` to start application

## Useful Commands

0. login with `firebase login`
1. use `firebase --help` for helping
2. `firebase projects:list` to list all of your projects

## What does this template offer?

1. [hot reload firebase function for development](https://dev.to/muhajirdev/speed-up-your-firebase-development-workflow-and-save-your-time-42bo)
    - [tscpaths](https://www.npmjs.com/package/tscpaths)
    - [tsc-watch](https://www.npmjs.com/package/tsc-watch)
2. [Alias project setup in `.firebaserc`](https://stackoverflow.com/questions/36432458/how-do-i-switch-apps-from-the-firebase-cli)
    - run `firebase use <alias name>` to switch between projects
    - or run `firebase use <project name>` directly
3. Shell Script to run firebase emulators with persistent data setup