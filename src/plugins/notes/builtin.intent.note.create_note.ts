import { BotBuilder } from '@telefonica/bot-core';

// This intent is managed by this discrete steps 
export default [
    createStep
];

function createStep(session: BotBuilder.Session, args: any) {
    // We reply to the user using our predefined i18n string (see /locale/en-us/index.json)
    session.endDialog(session.gettext('note.create_note', args.entities[0].entity));
}
