import { InputFile } from "grammy";
import { texts } from "../constants/texts";
import convertJsonToExcel from "../converterFolder";
import bot from "../core/bot";
import { t } from "../i18";
import { MyContext } from "../types/MyContext";
import { UserType } from "../types/Session";
import { makePost } from "./makePost";

export const sendPost = async (user: UserType, ctx: MyContext) => {
  if (user.paerson === t(ctx, texts.jismoniy)) {
    await bot.api
      .sendMessage(-1001222889779, makePost(user, ctx))
      .catch((err) => console.log(err));
    await convertJsonToExcel();
    await bot.api
      .sendDocument(-1001222889779, new InputFile("./users.xlsx"), {
        caption: "users.xlsx",
      })
      .catch((err) => console.log(err));
  } else {
    await bot.api
      .sendMessage(-1001660937611, makePost(user, ctx))

      .catch((err) => console.log(err));
    await bot.api
      .sendDocument(-1001660937611, new InputFile("./users.xlsx"), {
        caption: "users.xlsx",
      })
      .catch((err) => console.log(err));
  }
};
