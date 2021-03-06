import { createConnection } from "typeorm";
import { loadBot } from "./bot";
import { PASSWORD_DB } from "./config";
import { Users } from "./db/User";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      database: "user_info_three",
      username: "postgres",
      port: 5432,
      password: PASSWORD_DB,
      host: "localhost",
      entities: [Users],
      synchronize: true,
    });
    console.log("Connected to DB");
    loadBot();
  } catch (err) {
    console.log("Unable to connect DB, Eror: ", err);
  }
};

main();
