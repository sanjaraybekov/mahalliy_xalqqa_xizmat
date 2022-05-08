import { Composer } from "grammy";
import { texts } from "../constants/texts";
import { t } from "../i18";
import { main_menu } from "../markups/markups";
import { MyContext } from "../types/MyContext";

const composer = new Composer<MyContext>();

composer.callbackQuery(texts.yuridik, (ctx) => {
  ctx.session.user.user_id = ctx.chat?.id || 0;
  ctx.session.user.userName = ctx.from.username || "";
  ctx.session.user.firstName = ctx.from.first_name;
  ctx.session.user.shaxsi = t(ctx, texts.yuridik);
  ctx.session.route = texts.takliflar;
  return ctx.editMessageText(t(ctx, texts.takliflar_qoldirish));
});

composer.callbackQuery(texts.jismoniy, (ctx) => {
  ctx.session.user.user_id = ctx.chat?.id || 0;
  ctx.session.user.userName = ctx.from.username || "";
  ctx.session.user.firstName = ctx.from.first_name;
  ctx.session.user.shaxsi = t(ctx, texts.jismoniy);
  ctx.session.route = texts.takliflar;
  return ctx.editMessageText(t(ctx, texts.takliflar_qoldirish));
});
composer.callbackQuery(texts.ha, (ctx) => {
  ctx.session.user.user_id = ctx.chat?.id || 0;
  ctx.session.user.userName = ctx.from.username || "";
  ctx.session.user.firstName = ctx.from.first_name;
  ctx.session.user.shaxsi = t(ctx, texts.jismoniy);
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
