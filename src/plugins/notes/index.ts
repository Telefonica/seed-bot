import { BotBuilder } from '@telefonica/bot-core';

import noteCreate from './builtin.intent.note.create_note';

// create a plugin with one dialog
let plugin = new BotBuilder.Library('notes');

plugin.dialog('builtin.intent.note.create_note', noteCreate);

export default plugin;
