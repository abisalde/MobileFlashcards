# Mobile Flashcards

Mobile flashcard is a React Native App for both iOS and Android which allows users to create different categories of flashcards called "decks", add flashcards to these decks, and then study these decks by quizzing themselves.

- For Android, it is tested on the latest version of Android with Pixel 5_API_29 using the Android Studio Emulator on the local machine
- For iOS, it is tested on the latest version of iOS with iPhone 12 [here](https://snack.expo.dev/@abisalde/mobileflashcards)

It is also tested on the latest version of React Native `0.66.3`, React Navigation `v6`, Expo, and Redux.

In this application, users will be able to:

- create a deck which can hold an unlimited number of flashcards.
- add flashcards to the deck.
- quiz themselves on the flashcards in a specific deck and receive a score once they're done.
- during the quiz, users can flip a card over to see the answer.
- users receive a notification reminder to study the deck if they haven't done so in a day.

## Demo

Expo Snack: [Mobile Flashcards](https://snack.expo.dev/@abisalde/mobileflashcards)

## Installation

- Clone the repository:
  `git clone https://github.com/abisalde/mobile-flashcards.git`
- Install Project dependencies:
  - `npm install` or `yarn install`
- Run the app using an Emulator:
  - For iOS: [iOS Emulator](https://reactnative.dev/docs/0.65/environment-setup) `react-native start` && `react-native run-ios` on a separate terminal
  - For Android: [Android Emulator](https://reactnative.dev/docs/0.65/environment-setup) `react-native start` && `react-native run-android` on a separate terminal
- Run the app using Expo Go App on your mobile device:
  - Scan the QR Code using the Expo Client app: [Expo Client for Android and iOS](https://snack.expo.dev/@abisalde/mobileflashcards)

## Author

- [Isaiah Abiodun](https://linkedin.com/in/abisalde) - Software Engineer working with JavaScript

## Tech Stack

- [React Native@0.66.3](https://reactnative.dev/)
- [Redux@4.1.2](https://redux.js.org/)
- [React Navigation@6.0.6](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo Modules](https://docs.expo.dev/bare/installing-expo-modules/)

## Backend Server

- AsyncStorage is used to store the decks and their flashcards.

## Screenshot

![MobileFlashcards](https://i.imgur.com/p5p54T8.jpg)

## Create React Native App

This project was bootstrapped using [Create React Native App](https://reactnative.dev/docs/getting-started) and [Expo Modules](https://docs.expo.dev/bare/installing-expo-modules/)
