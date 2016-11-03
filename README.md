# seed-bot

Seed project for creating a conversational bot. Based on the MS Bot Framework.

## Run the app

The app entry point is [app.ts](./src/app.ts).
Run the following commands to clone the project, install its dependencies (**node 6.x required**) and run the bot in console mode.

```sh
git clone git@pdihub.hi.inet:TDAF/seed-bot.git
cd seed-bot

npm login # See note below
npm install
npm run dev
```

Now, you can type something to start talking with the bot. Just type:

`Create a note with Hello world!`

the bot will reply with the phrase `Note created: "Hello world!"`

_Note: You need to be a member of [npmjs.com/org/telefonica](https://www.npmjs.com/org/telefonica). Ask tdaf@tid.es for access_

## Overall architecture

```
                                         +--------+
                                         |  LUIS  <--- Training tools
                                         +---+----+
                                             |
                         +-------------------------+
                         | +---+ +---+       |     |    +----------+
                         | |   | |   |       |     | +-->  plugin  |
                         | | m | | m |   +---+---+ | |  +----------+
           +---------+   | | i | | i |   |       | | |  +----------+     +-----------------+
           |         |   | | d | | d |   |       | | +-->  plugin  |  +-->3rd party service|
Direct     |   MS    |   | | d | | d |   |       | | |  +----------+  |  +-----------------+
 Line  +---+ gateway +---+ | l | | l +--->  BOT  +---+  +----------+  |
           |         |   | | e | | e |   |       | | +-->  plugin  +--+
           |         |   | | w | | w |   |       | |    +----------+
           +---------+   | | a | | a |   |       | |
                         | | r | | r |   |       + |
                         | | e | | e |   +---+---+ |
                         | |   | |   |       |     |
                         | +---+ +---+       |     |
                         +-------------------------+
                                             |
                                             |
                                        +----+----+
                                        | context |
                                        +---------+
```
