import { Router } from "@grammyjs/router";
import { MyContext } from "../types/MyContext";
import { texts } from "../constants/texts";
import { t } from "../i18";
import { sendPost } from "../helpers/sendPost";
import bot from "../core/bot";
import convertJsonToExcel from "../converterFolder";
import { InputFile } from "grammy";
import { User } from "../../db/User";

const router = new Router<MyContext>((ctx) => ctx.session.route);

router.route(texts.add_phone, async (ctx) => {
  const regex = /\+?(998)? ?(\d{2} ?\d{3} ?\d{2} ?\d{2})$/gi;
  if (regex.test(ctx.msg?.text || "") || ctx.msg?.contact) {
    (ctx.session.user.phones = ctx.msg?.contact?.phone_number || ""),
      (ctx.session.route = texts.takliflar);
    return ctx.reply(t(ctx, texts.takliflar_qoldirish), {
      parse_mode: "HTML",
      reply_markup: { remove_keyboard: true },
    });
  } else {
    return ctx.reply(t(ctx, texts.add_phone_err));
  }
});

router.route(texts.takliflar, async (ctx, next) => {
  if (ctx.update.message?.text) {
    ctx.session.user.offer = ctx.update.message.text;
    const newUser = await User.create({
      user_id: ctx.session.user.user_id || 0,
      nick_name: ctx.session.user.nick_name,
      person: ctx.session.user.paerson,
      offer: ctx.session.user.offer,
      phones: ctx.session.user.phones,
      tg_username: ctx.session.user.tg_username,
    });
    await newUser.save();
    await sendPost(ctx.session.user, ctx);
    return ctx
      .reply("Takliflaringiz kurib chiqiladi! Yana takliflaringiz bormi?", {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: t(ctx, texts.ha),
                callback_data: texts.ha,
              },
              {
                text: t(ctx, texts.yoq),
                callback_data: texts.yoq,
              },
            ],
          ],
        },

        parse_mode: "HTML",
      })
      .then(() => next());
  } else ctx.reply("Iltimos taklifingizni yozma shakilda kiriting!");
});

export { router };
