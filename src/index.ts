import { loadBot } from "./bot";

const main = async () => {
  try {
    console.log("Connected to DB");
    loadBot();
  } catch (err) {
    console.log("Unable to connect DB, Eror: ", err);
  }
};
main();
