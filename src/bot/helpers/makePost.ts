import { texts } from "../constants/texts";
import { t } from "../i18";
import { MyContext } from "../types/MyContext";
import { UserType } from "../types/Session";

export const makePost = (user: UserType, ctx: MyContext) => {
  return `📄 Foydalanuvchi haqida ma'lumot\n\n👤 ${
    t(ctx, texts.shaxsi) + user.shaxsi
  }\n📱 ${t(ctx, texts.nikename) + user.firstName}\n📱 ${
    t(ctx, texts.username) +
    (ctx.from?.username ? `@${user.userName}` : "Mavjud emas")
  }
  \n📝 ${t(ctx, texts.taklif) + user.taklif}`;
};
