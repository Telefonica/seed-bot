/**
 * A plugin just exports a "library" whose dialogs are the LUIS intents the plugin can understand
 */

import { BotBuilder } from '@telefonica/bot-core';

import noteCreate from './builtin.intent.note.create_note';

// create a plugin, the id must be unique in your bot
let plugin = new BotBuilder.Library('notes');

// Add the dialogs, one by one, that this plugin can manage
// The dialog name (1st param) is the intent name as defined in LUIS
plugin.dialog('builtin.intent.note.create_note', noteCreate);

export default plugin;
