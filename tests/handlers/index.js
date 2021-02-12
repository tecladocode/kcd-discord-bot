const discordHandlers = require('./discord')
const onBoardHandlers = require('./onBoarding')

module.exports = [...discordHandlers, ...onBoardHandlers]
