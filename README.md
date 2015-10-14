# node-red-contrib-eddystone

![sample](img/eddystonenode.png)

Create an [Eddystone](https://github.com/google/eddystone) Beacon using [Node-RED](http://nodered.org/). [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url) beacons can be used with the [Physical Web](http://google.github.io/physical-web/). Add this node to your Node-RED environment for easy prototyping for the Physical Web.

## Prerequisites

**node-red-contrib-eddystone** is based on the awesome [node-eddystone-beacon](https://github.com/don/node-eddystone-beacon). However, node-eddystone-beacon has the same [prerequesits](https://github.com/don/node-eddystone-beacon#prerequisites) you might want to check. For instance, you might need to run Node-RED with root permissions for accessing the Bluetooth interface depending on your setup.

## Example
This flow allows to control a Eddystone URL beacon for setting the URL, starting and stopping broadcasting, setting temperature, and setting power. All parameters can be set by sending messages to the EddystoneURL node.

![sample](img/sample.png)

The official [Android App for The Physical Web](https://play.google.com/store/apps/details?id=physical_web.org.physicalweb) might me a nice addition for testing and playing around:

![screen01](img/screen01.png)
![screen02](img/screen02.png)
