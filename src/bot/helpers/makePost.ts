import { texts } from "../constants/texts";
import { t } from "../i18";
import { MyContext } from "../types/MyContext";
import { UserType } from "../types/Session";

export const makePost = (user: UserType, ctx: MyContext) => {
  return `Foydalanuvchi haqida ma'lumot\n\nš¤ ${
    t(ctx, texts.shaxsi) + user.paerson
  }\nš± ${t(ctx, texts.nikename) + user.nick_name}\nš± ${
    t(ctx, texts.username) +
    (ctx.from?.username ? `@${user.tg_username}` : "Mavjud emas")
  }\n${t(ctx, texts.phone) + user.phones}
  \nš ${t(ctx, texts.taklif) + user.offer}`;
};
