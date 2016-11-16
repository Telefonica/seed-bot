import * as dotenv from 'dotenv';
import * as path from 'path';

// Load configuration in process.env from the .env file
dotenv.config();

import { Bot, BotBuilder, BotServerRunner, BotConsoleRunner, Startup } from '@telefonica/bot-core';

// Create the bot
let bot = new Bot({
    // The luis models to be consulted
    modelMapSet: [
        { 'en-us': process.env.LUIS_MODEL__CORTANA__EN_US }
    ],
    // The plugins to use
    plugins: [
        path.join(__dirname, 'plugins', 'notes')
    ],
    // Language settings
    localizerSettings: {
        botLocalePath: path.join(__dirname, '..', 'locale'),
        defaultLocale: process.env.BOT_DEFAULT_LOCALE || 'en-us'
    }
});

// Lets go to startup our bot
let startup = new Startup();

if (process.env.NODE_ENV === 'development') {
    // During development, we interact with the bot using our terminal
    let runner = new BotConsoleRunner({
        bot
    });
    startup.use(runner);
} else {
    // but in production, we publish a WebServer with the Micorosoft credentials
    // so it can be accessed by the MS BotFramework (MS Gateway)
    let runner = new BotServerRunner({
        bot,
        port: parseInt(process.env.BOT_PORT, 10) || 8080,
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    });
    startup.use(runner);
}

// All done. Launch!
startup.bootstrap('bot');
