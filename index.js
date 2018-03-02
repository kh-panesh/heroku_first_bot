const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '497864946:AAHauc30d_chyi6ahzW-jZBky01FK243fl4'

const bot = new TelegramBot(TOKEN, {pooling:true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `hello from heroku, bot says :"Hi, ${msg.from.first_name}"`)
})
