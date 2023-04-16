import GameSaving from "./gamesaving.js";
import json from "./parser.js";
import read from "./reader.js";

const defaultData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

export default class GameSavingLoader {
  static load(param = defaultData) {
    return new Promise((resolve, reject) => {
      const data = read(param);
      data.then((buffer) => {
        const value = json(buffer);
        return value;
      }).then((str) => {
        try {
          const objData = JSON.parse(str);
          const result = new GameSaving(objData);
          resolve(result);
        } catch (error) {
          reject(new Error("Ошибка чтения данных"));
        }
      });
    });
  }
}
