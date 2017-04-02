## Dota 2 GameState Inspector
The Dota 2 GameState Inspector is an application that listens to the GameState that Dota 2 can broadcast. It will display this information in a separate window and is thus best used in a dual-monitor setup.

Some of the information that it *can* display:
* Current hero you're playing
* Health and mana values
* Total, reliable and unreliable gold
* Gold and experience per minute
* Current location on the map

And much more.

## Using the application
### From source
To use the application from source, complete the following steps:
* Clone the repository
* Make sure you have [node.js and npm](https://nodejs.org/en/) installed
* Run ``npm run initialize`` to download the correct dependencies and create the right folders
* Run ``npm start`` to start the application

### Initializing
To initialize this app, just run ``npm run initialize``. It will then download the correct depedencies and create the right folders.

### Starting
To start the app, simply run ``npm start``. Make sure to have initialized it, though.
