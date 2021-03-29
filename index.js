/*
 *  Copyright (c) 2021 Bastian Leicht
 *  All rights reserved.
 *  https://bastianleicht.com/license
 */
const notifier = require('node-notifier');
const path = require('path');

let intervalInSeconds = 900;
let refreshIntervalId = setInterval(showNotification, intervalInSeconds * 1000);

const reminderMessages = [
    'Zeit etwas zu trinken!',
];

function getRandomMessage() {
    const max = reminderMessages.length;
    return reminderMessages[Math.floor(Math.random() * max)];
}

function showNotification() {
    notifier.notify(
        {
            title: 'Water Reminder 💦',
            message: getRandomMessage(),
            icon: path.join(__dirname, 'drop.png'),
            sound: true,
            wait: true,
            actions: ['Deaktivieren'],
        },
        function (err, response) {
            if (response == 'activate') {
                console.log("Du hast die Erinnerungen deaktiviert :(");
                clearInterval(refreshIntervalId);
            }
        }
    );
}