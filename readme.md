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

#### Initializing D2GSI
To initialize D2GSI, just run ``npm run initialize``. It will then download the correct dependencies and create the right folders for it to function.

### Configuring Dota 2
However, Dota 2 currently won't be automagically be configured to work, so in order to use D2GSI in it's current state, you need to copy the `gamestate_integration_d2gsi.cfg` file inside the following Dota 2 folder:
```
<path to dota 2>/game/dota/cfg/gamestate_integration/
```

If either the ``cfg`` or ``gamestate_integration`` folder doesn't exist, feel free to create them.

#### Starting
To start the app, simply run ``npm start``. Make sure to have initialized and configured it first, though. Once that is done, test that it is working by starting a demo match. If values start to show up, it's working.
