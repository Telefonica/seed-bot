# seed-bot

Seed project for creating a conversational bot. Based on the MS Bot Framework.

## Run the app

The app entry point is [app.ts](./src/app.ts).
Run the following commands to clone the project, install its dependencies (**node 6.x required**) and run the bot in console mode.

```sh
git clone git@github.com/Telefonica/seed-bot.git
cd seed-bot

npm install
npm run dev
```

Now, you can type something to start talking with the bot. Just type "Create a note with Hello World".

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

## LICENSE

Copyright 2016 Telefónica I+D

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
