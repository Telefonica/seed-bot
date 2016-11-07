import { BotBuilder } from '@telefonica/bot-core';

// This dialog is managed by this discrete steps
export default [
    createStep,
    confirmCreation
];

function createStep(session: BotBuilder.Session, args: any, next: Function) {
    // Read the entity we are interested in
    let entityNote = BotBuilder.EntityRecognizer.findEntity(args.entities, 'builtin.note.note_text');

    // Keep the note as part of the dialog data
    if (entityNote) {
        session.dialogData.note = entityNote.entity;

        // We reply to the user using our predefined i18n string (see /locale/en-us/index.json)
        let message = session.gettext('note.confirm_note', session.dialogData.note);

        // Use a confirmation prompt. Different kind of prompts are available.
        BotBuilder.Prompts.confirm(session, message);
    } else {
        session.endDialog('I have not found any notes');
    }
}

function confirmCreation(session: BotBuilder.Session, result: BotBuilder.IPromptConfirmResult, next: Function) {
    if (result.response === true) {
        session.endDialog('note.create_note');
    } else {
        session.endDialog('note.cancel_note');
    }
}
