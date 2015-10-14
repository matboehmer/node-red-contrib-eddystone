module.exports = function(RED) {

    function EddystoneURLNode(config) {

        RED.nodes.createNode(this, config);

        this.eddystoneBeacon = require('eddystone-beacon');

        // get properties
        this.url = config.url;

        var node = this;

        this.on('input', function(msg) {

            var url = msg.url || node.url;
            node.url = url;

            var active = (typeof msg.active !== 'undefined') ? msg.active : node.active;
            node.active = active;

            if (typeof msg.batteryVoltage !== 'undefined') {
                node.eddystoneBeacon.setBatteryVoltage(msg.batteryVoltage);
            }

            if (typeof msg.temperature !== 'undefined') {
                node.eddystoneBeacon.setTemperature(msg.temperature);
            }


            if (active) { // set beacon active
                node.eddystoneBeacon.advertiseUrl(url);
            } else { // set beacon inactive
                node.eddystoneBeacon.stop();
            }

            displayStatus(node);
            node.send(msg);
        });

        displayStatus(node);
    }

    function displayStatus(node) {
      if (node.active) {
          node.status({fill:"blue",shape:"dot",text:"broadcasting URL"});
      } else {
          node.status({fill:"blue",shape:"ring",text:"stopped"});
      }
    }

    RED.nodes.registerType("eddystone-url", EddystoneURLNode);
}
