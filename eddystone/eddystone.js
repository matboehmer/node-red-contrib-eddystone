module.exports = function(RED) {

    function EddystoneURLNode(config) {

        RED.nodes.createNode(this, config);

        this.eddystoneBeacon = require('eddystone-beacon');

        // get properties
        this.url = config.url;

        var node = this;

        this.on('input', function(msg) {

            var url = msg.url || msg.payload || node.url ;
            node.url = url;
			
			var active = true;
			
			if (msg.active) 
				active = msg.active;
			else if (node.active)
				active = node.active;
			
			if(msg.intent == 1) // open
				active = true;
				
			if(msg.intent == 0) // close
				active = false;
				
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
