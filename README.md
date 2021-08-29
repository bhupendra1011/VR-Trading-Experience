## React 360 based Virtual Reality Trading APP [POC]

### Why WebVR
WebVR is an open specification that makes it possible to experience VR in browsers. The goal is to make it easier for everyone to get into VR experiences, no matter what device is being used. VR technology appeals to industry because it has the potential to improve the user experience by transforming uninspiring or complicated content into a vivid, immersive experience. This opportunity is particularly relevant to the financial industry, because it represents a new channel for financial services providers -– such as wealth managers, brokerage firms and personal bankers — to deliver financial content in a novel and easily consumable visual format.

### How to implement VR in Web ?
Today to implement VR experinces on web , below are options :

[Three.JS](https://threejs.org/) — low level API built on WebGL.

[A-Frame](https://aframe.io/) — HTML-like Entity Component System built on Three.JS. This is [Repo](https://github.com/bhupendra1011/VR-shopping) of *VR shopping app*.

**[React VR](https://facebook.github.io/react-360/)** — React Native-like API built on Three.JS.

[Babylon.JS](https://www.babylonjs.com/) — an open source 3D engine based on webGL.

**React 360** VR framework is used in this repo.

### Idea :

We intent to create a proof of concept  around a Web app that could provide immersive VR experience to the traders. It would demonstrate user's portfolio in 3D view also user would be able to interact with VR trading app , through voice commands / gestures.

### Use cases :

#### Data  Visualization :
Being able to visualize data is an important tool traders use to help them make important decisions about wealth management. VR add to this experience and make it easier and faster to visualize and organize large amounts of data in an enjoyable and immersive manner in a 3D virtual environment.

#### Virtual Trading :
Currently a trader requires his trading workstation to perform his operations. What if trader is not available at his  desk , he does not  has access to multiple monitors setup ? VR Headset can be helpful in this scenario.

---
#### DEMO
![VR-Trader](https://i.ibb.co/V9LM2f2/trader-app.png)

Live Demo:  http://vr-trader.surge.sh/#

#### Installation
1. Clone/Download Repo
2. ```npm i``` to install dependicies  
3. ```npm run start``` to start server

Free Deployment 
1. ```npm run bundle``` to build app for production.
2. ```npm install --global surge``` 
3. ```surge``` under the production build directory.

*Note: To test with VR-Headset enable webVR flag in chrome://flags and check demo site in VR view.Update chrome to latest verison on Android. Firefox nightly browsers best work for web vr.*
