import { BotBuilder } from '@telefonica/bot-core';

// create a plugin with one dialog
let plugin = new BotBuilder.Library('notes');
plugin.dialog('builtin.intent.note.create_note', create);

function create(session: BotBuilder.Session, args: any) {
    session.endDialog('Note created: "' + args.entities[0].entity + '"');
}

export default plugin;
