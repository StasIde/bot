const TelegramApi = require("node-telegram-bot-api");

const token = "6199323399:AAH9H7cQ9uZNfsVGTFHR1UpSPEjidCRBrjE";

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "Приветствие" },
  { command: "/info", description: "Информация о пользователе" },
]);

const start = () => {
  bot.on("message", async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendAnimation(chatId, "https://i.gifer.com/7zom.gif");
      return bot.sendMessage(chatId, `Привет ${msg.from.username}`);
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Тебя зовут ${msg.from.first_name || ""} ${msg.from.last_name || ""}`
      );
    }
    await bot.sendAnimation(chatId, "https://i.gifer.com/2K8.gif");
    return bot.sendMessage(
      chatId,
      "Я тебя не понимаю, сформулируй вопрос по-другому"
    );
  });
};

start();
