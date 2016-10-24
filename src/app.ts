import * as dotenv from 'dotenv';
import * as path from 'path';

// Load configuration in process.env from the .env file
dotenv.config();

import {
    Bot,
    BotBuilder,
    BotServerRunner,
    BotConsoleRunner,
    ServerRunner,
    Startup
} from '@telefonica/bot-core';

let bot = new Bot({
    models: {
        'en-us': process.env.LUIS_MODEL
    },
    plugins: [ path.join(__dirname, 'plugins', 'notes')],
    localizerSettings: {
        botLocalePath: path.join(__dirname, '..', 'locale'),
        defaultLocale: process.env.BOT_DEFAULT_LOCALE || 'en-us'
    }
});

let startup = new Startup();

if (process.env.NODE_ENV === 'development') {
    let runner = new BotConsoleRunner({
        bot
    });
    startup.use(runner);
} else {
    let runner = new BotServerRunner({
        bot,
        port: parseInt(process.env.BOT_PORT, 10) || 8080,
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    });
    startup.use(runner);
}

startup.bootstrap('bot');
