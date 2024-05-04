const mqtt = require('mqtt')

// MQTT connects to Adafruit IO
const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: 'thuanlebk473',
    password: 'aio_Pgfx0857GlUHjxcwo26G2a2qa0qI'
});

// Optionally publish messages to a topic
client.publish('thuanlebk473/feeds/fan-control', '0');

client.on('connect', function () {
    console.log("Connected to MQTT");

    // Subscribe to a topic
    client.subscribe('thuanlebk473/feeds/fan-control', function (err) {
        if (!err) {
            console.log("Subscription successful");
        } else {
            console.error("Subscription failed:", err);
        }
    });
});

// Handle incoming messages
client.on('message', function (topic, message) {
    console.log(`Message received on topic ${topic}: ${message.toString()}`);
});

// Handle errors
client.on('error', function (error) {
    console.error("Error from MQTT client:", error);
});
