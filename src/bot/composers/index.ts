import { Composer, Keyboard } from "grammy";
import { texts } from "../constants/texts";
import { t } from "../i18";
import { main_menu } from "../markups/markups";
import { MyContext } from "../types/MyContext";

const composer = new Composer<MyContext>();

composer.callbackQuery(texts.yuridik, (ctx) => {
  ctx.session.user.user_id = ctx.chat?.id || 0;
  ctx.session.user.tg_username = ctx.from?.username || "";
  ctx.session.user.nick_name = ctx.from?.first_name || "";
  ctx.session.user.paerson = t(ctx, ctx.callbackQuery.data);
  ctx.session.user.offer = ctx.update.message?.text || "";
  ctx.session.route = texts.add_phone;
  const sendPhone = new Keyboard().requestContact(
    t(ctx, texts.add_phone_req_btn)
  );
  return ctx.reply(t(ctx, texts.add_phone), {
    reply_markup: { ...sendPhone, resize_keyboard: true },
    parse_mode: "HTML",
  });
});

composer.callbackQuery(texts.jismoniy, (ctx) => {
  ctx.session.user.user_id = ctx.chat?.id || 0;
  ctx.session.user.tg_username = ctx.from?.username || "";
  ctx.session.user.nick_name = ctx.from?.first_name || "";
  ctx.session.user.offer = ctx.update.message?.text || "";
  ctx.session.user.paerson = t(ctx, ctx.callbackQuery.data);
  ctx.session.route = texts.add_phone;

  const sendPhone = new Keyboard().requestContact(
    t(ctx, texts.add_phone_req_btn)
  );
  return ctx.reply(t(ctx, texts.add_phone), {
    reply_markup: { ...sendPhone, resize_keyboard: true },
    parse_mode: "HTML",
  });
});

composer.callbackQuery(texts.ha, (ctx) => {
  ctx.session.route = texts.takliflar;

  return ctx.editMessageText(t(ctx, texts.takliflar_qoldirish));
});
composer.callbackQuery(texts.yoq, (ctx) => {
  return ctx.editMessageText(
    "Takliflaringiz uchun raxmat! Botni qayta ishga tushirish uchun /start 👈 buyrug'ini bosing."
  );
});
composer.callbackQuery(texts.main_menu, (ctx) => {
  ctx.session.route = "";
  ctx.deleteMessage();
  return main_menu(ctx);
});

export { composer };
