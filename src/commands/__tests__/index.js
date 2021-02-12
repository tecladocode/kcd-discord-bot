const Discord = require('discord.js')
const {makeFakeClient, waitUntil} = require('test-utils')
const {handleNewMessage} = require('..')

test('handles incoming messages', async () => {
  const {client, defaultChannels, kody} = await makeFakeClient()

  const message = new Discord.Message(
    client,
    {id: 'help_test', content: '?help', author: kody.user},
    defaultChannels.talkToBotsChannel,
  )

  await handleNewMessage(message)
  await waitUntil(() =>
    expect(
      Array.from(defaultChannels.talkToBotsChannel.messages.cache.values()),
    ).toHaveLength(1),
  )
  const messages = Array.from(
    defaultChannels.talkToBotsChannel.messages.cache.values(),
  )
  expect(messages[0].content).toMatchInlineSnapshot(`
    "Here are the available commands:

    - help: Lists available commands
    - thanks: A special way to show your appreciation for someone who's helped you out a bit
    - info: Gives information about the bot (deploy date etc.)"
  `)
})
