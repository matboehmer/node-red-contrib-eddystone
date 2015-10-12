module.exports = function(RED) {

    console.log("hello Eddystone module");

    var eddystoneBeacon = require('eddystone-beacon');

    function EddystoneNode(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        this.on('input', function(msg) {
			console.log(msg);
            node.log("url: " + msg.url);
            node.send(msg);
            eddystoneBeacon.advertiseUrl(msg.url);
        });
    }

    RED.nodes.registerType("eddystone", EddystoneNode);
}
