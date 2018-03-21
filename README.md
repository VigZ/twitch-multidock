# twitch-multidock
A simple app to to watch multiple twitch streams at once, and have access to data about those streams. This app was built in 4 and a half hours (self imposed restraints), so it may be lacking some features that I would love to add. There is more coming in the pipeline!

## Motivation
I decided to create this app because I noticed similar apps UI wasn't exactly user friendly, and there weren't too many features apart from the stream itself.

## Tech/framework used
I built this app using a combination of React.js and Redux for state management. I intend to heavily expand upon features and reasoned Redux would help me manage the evergrowing state.

## Features
This app allows you to search for a stream by username, and add it to the dock. The iframe that spawns will allow you to utilize twitch chat, view the stream and asscociated extensions, and drag and drop the frame to whereever you prefer.

## Installation
Clone this repo to your machine, and run a simple npm install to install the dependencies listed in your package.json file.

## API Reference
For more information regarding the Twitch.tv API, head over to https://dev.twitch.tv/docs/api

## Tests
I find testing very important, and would love to add some solid tests to this project utilizing a testing framework such as Mocha or Jest.

## Known Bugs/Issues
There is a UI layering issue that imposes the side bars over the draggable UI elements, I plan to implement a simple fix that changes the z axis of those containers.

## Planned Features
I plan to allow a user to resize the iframes based on either a corner drag or hard input. I had started to implement this (via props passdown) but was running into some bugs, so it was unfortunately cut for time.
The vestiges are still there however, and I would love to go back and fix that up.

Another feature I would love to add is a screen splitting mode, which would allow a user to have their streams automatically and evenly take up the space on the dock.
I realize not everyone likes the tactile drag and drop (though i love it!), so allowing for both options would be cool.

Oauth is something I was toying with in the early stages, and would love implemement once I add a backend that can persist user data.

Adding more Twitch metadata to the left sidebar and better styling wrap up my planned features for now. The app is in a prototype stage, so any feedback is welcomed and encouraged!

