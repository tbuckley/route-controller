Route Controller
================

A web controller for [route.io](http://route.io).

## Features

* Library of "tiles" that allow control of media playback and lights, as well as
voice commands
* Multi-room support (eg. switch between Kitchen, Living Room, and Bedroom)
* Lockscreen allows controller to serve as a clock when not in use

## Requirements

* node.js + npm
* Bower: `npm install -g bower`
* Cordova: `npm install -g cordova`

## Installation instructions

* Install Polymer dependencies: `bower install`
* Install dev dependencies: `npm install`
* Run Grunt
  * Desktop: `grunt desktop`
  * Mobile (for use with Cordova app): `grunt mobile`
* In `cordova/` directory: `cordova run android`
  * Will install on Android device if connected
  * Otherwise, will run emulator

## Usage with route.io

* Use web_experimental to serve output of grunt commands (build/desktop or
build/mobile)
* Restarting server will trigger a refresh of the browser page