# Code Challenge

This project is a native mobile application built as an interview code challenge.  The task was to rebuild a UI that represents data provided in JSON format.  The app was to be built in either React Native or flutter and requires some interaction and animation on elements that represent number data.

The app was built with the React Native, and Expo Framework.

It features all of the data provided in the JSON file and users can swipe between courses which display details regarding course completion and statistics

Although only a single page was required the app was built with growth in mind. Therefore the single page is built within a router that is ready to accommodate any other routes/screens that the app may need.

All existing routes are for demo purposes only and all lead to the home page.

## Installation

Upon downloading the files please use npm

```bash
npm install
```
And to begin the development server and deploy the app on local emulators please run

```bash
npm start
```

Alternatively to demo the app on your mobile device or via an online emulator, please visit the expo snack below on web and use the in browser emulator, or on your mobile device and make sure you have the expo app installed.

## [Expo Snack](https://snack.expo.io/@git/github.com/kelvindelosangeles/Revolvia-Challenge)


  
## Dependencies

[React Spring -](https://www.react-spring.io/) An animation library used to create physics based movements on the UI.

[React Progress Circle -](https://www.react-spring.io/) A circle progress bar component.  Used in combination with react spring to produce a progress circle that animates on load from 0 to progress
