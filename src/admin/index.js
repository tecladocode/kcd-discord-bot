const dedupeMessages = require('./deduping-channel-posts')
const {pingAboutMissingAvatar} = require('./ping-about-missing-avatar')
const cleanupSelfDestructMessages = require('./cleanup-self-destruct-messages')

function setup(client) {
  client.on('message', dedupeMessages.handleNewMessage)
  dedupeMessages.setup(client)

  cleanupSelfDestructMessages.setup(client)

  client.on('message', pingAboutMissingAvatar)
}

module.exports = {
  setup,
  dedupeMessages,
  pingAboutMissingAvatar,
  cleanupSelfDestructMessages,
}
