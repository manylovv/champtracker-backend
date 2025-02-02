import { validate, parse } from '@telegram-apps/init-data-node';
import { createUser, getUser } from './db/repo/user';
import { User } from './db/schema';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error('telegram bot token is not found');
}

export const getValidatedUser = async (initData: string): Promise<User> => {
  // check if user is not a scammer and came from our telegram bot, good!
  validate(initData, BOT_TOKEN, {
    expiresIn: 0,
  });

  // parsing from fucking string to normal good js object, good!
  const parsedInitData = parse(initData);

  const telegramUser = parsedInitData.user;

  // if no user (такого не будет), но проверку добавили
  if (!telegramUser) {
    throw new Error('User is not found in initData');
  }

  // берем user-а из диби (возможно его там нет, если он НОВИЧОК)
  let user = await getUser(telegramUser.id);

  // если он НОВИЧОК, то создаем его в диби и записываем в переменную user
  if (!user) {
    user = await createUser(telegramUser);
  }

  return user;
};
