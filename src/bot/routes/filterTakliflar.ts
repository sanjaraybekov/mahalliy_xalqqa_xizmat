import { Router } from "@grammyjs/router";
import { MyContext } from "../types/MyContext";
import { texts } from "../constants/texts";
import { t } from "../i18";

import { sendPost } from "../helpers/sendPost";

const router = new Router<MyContext>((ctx) => ctx.session.route);

router.route(texts.takliflar, async (ctx, next) => {
  if (ctx.update.message?.text) {
    ctx.session.user.taklif = ctx.update.message.text;
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
