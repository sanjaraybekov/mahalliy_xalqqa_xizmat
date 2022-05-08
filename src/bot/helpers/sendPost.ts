import { texts } from "../constants/texts";
import bot from "../core/bot";
import { t } from "../i18";
import { MyContext } from "../types/MyContext";
import { UserType } from "../types/Session";
import { makePost } from "./makePost";

export const sendPost = async (user: UserType, ctx: MyContext) => {
  if (user.shaxsi === t(ctx, texts.jismoniy)) {
    await bot.api
      .sendMessage(-1001222889779, makePost(user, ctx))
      .catch((err) => console.log(err));
  } else
    await bot.api
      .sendMessage(-1001660937611, makePost(user, ctx))
      .catch((err) => console.log(err));
};
