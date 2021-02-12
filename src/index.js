const onboarding = require('./onboarding')
const commands = require('./commands')
const admin = require('./admin')
const rollbar = require('./rollbar')

function setup(client) {
  onboarding.setup(client)
  commands.setup(client)
  admin.setup(client)
}

module.exports = {
  onboarding,
  commands,
  setup,
  rollbar,
  admin,
}
