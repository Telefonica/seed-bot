import { BotBuilder } from '@telefonica/bot-core';

export default [
    createStep
];

function createStep(session: BotBuilder.Session, args: any) {
    session.endDialog(session.gettext('note.create_note', args.entities[0].entity));
}
